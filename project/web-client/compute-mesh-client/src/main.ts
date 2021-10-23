import axios from "axios"
import {create as IpfsHttpClient} from 'ipfs-http-client'

const FILE_LIMIT_MB = 1.5;
const FILE_LIMIT_BYTES = FILE_LIMIT_MB * 1024 * 1024;
const CLIENT_ID = "client1";
const IPFS_API = "/ip4/52.14.211.248/tcp/5001";

async function getExecutor(): Promise<any> {
    const GET_URL = `http://localhost:8769/execute?client=${CLIENT_ID}`;

    try {
        const response = await axios.get(GET_URL, {
            headers: {'Access-Control-Allow-Origin': '*'}
        });
        return response.data
    } catch (exception) {
        console.log(`ERROR received from ${GET_URL}: ${exception}`);
    }
}

async function upload(file: File) {
    let executorInfo = await getExecutor()
    let requestTopic = executorInfo.message.RequestTopic
    let responseTopic = executorInfo.message.ResponseTopic
    console.log(`fetch executor topics: \n request=${requestTopic}\n response=${responseTopic}`)

    // @ts-ignore
    const ipfs = IpfsHttpClient(IPFS_API);
    file.arrayBuffer().then(buf => {
        const data = new Uint8Array(buf)
        ipfs.pubsub.publish(requestTopic, data)
        console.log(`data sent: ${data}`)
    })

    await ipfs.pubsub.subscribe(responseTopic, msg => {
        console.log(msg)
    })
}

function checkFileSize(file: File): boolean {
    let file_ok = false;
    let alertDiv = document.querySelector(".alert");
    if (alertDiv) {
        document.querySelector("main")?.removeChild(alertDiv);
    }
    if (file.size <= FILE_LIMIT_BYTES) {
        file_ok = true;
        return file_ok;
    }
    let warning = document.createElement("div");
    warning.classList.add("mt-3", "alert", "alert-warning");
    warning.setAttribute("role", "alert");
    warning.textContent = "File is too large. Limit: " + FILE_LIMIT_MB + "MB";
    document.querySelector("main")?.appendChild(warning);
    return file_ok;
}

function main(): void {
    const inputFile = document.querySelector("#inputFile")
    inputFile?.addEventListener("change", (e: Event): void => {
        let input;
        if (e !== null) {
            input = <HTMLInputElement>e.target;
        }
        if (input?.files) {
            console.log(input.value);
            let file = input.files[0];
            checkFileSize(file);
            const btnUpload = document.querySelector("#btnUpload");
            btnUpload?.addEventListener("click", () => {
                upload(file).then(r => {
                    console.log("file uploaded.")
                })
            })
        }
    })
}

export {main};