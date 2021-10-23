(self["webpackChunkcompute_mesh_client"] = self["webpackChunkcompute_mesh_client"] || []).push([["main"],{

/***/ 3607:
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const main_1 = __webpack_require__(/*! ./main */ 8519);
window.onload = main_1.main;


/***/ }),

/***/ 8519:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.main = void 0;
const axios_1 = __importDefault(__webpack_require__(/*! axios */ 9669));
const ipfs_http_client_1 = __webpack_require__(/*! ipfs-http-client */ 5091);
const FILE_LIMIT_MB = 1.5;
const FILE_LIMIT_BYTES = FILE_LIMIT_MB * 1024 * 1024;
const CLIENT_ID = "client1";
const IPFS_API = "/ip4/52.14.211.248/tcp/5001";
async function getExecutor() {
    const GET_URL = `http://localhost:8769/execute?client=${CLIENT_ID}`;
    try {
        const response = await axios_1.default.get(GET_URL, {
            headers: { 'Access-Control-Allow-Origin': '*' }
        });
        return response.data;
    }
    catch (exception) {
        console.log(`ERROR received from ${GET_URL}: ${exception}`);
    }
}
async function upload(file) {
    let executorInfo = await getExecutor();
    let requestTopic = executorInfo.message.RequestTopic;
    let responseTopic = executorInfo.message.ResponseTopic;
    console.log(`fetch executor topics: \n request=${requestTopic}\n response=${responseTopic}`);
    // @ts-ignore
    const ipfs = (0, ipfs_http_client_1.create)(IPFS_API);
    file.arrayBuffer().then(buf => {
        const data = new Uint8Array(buf);
        ipfs.pubsub.publish(requestTopic, data);
        console.log(`data sent: ${data}`);
    });
    await ipfs.pubsub.subscribe(responseTopic, msg => {
        console.log(msg);
    });
}
function checkFileSize(file) {
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
function main() {
    const inputFile = document.querySelector("#inputFile");
    inputFile?.addEventListener("change", (e) => {
        let input;
        if (e !== null) {
            input = e.target;
        }
        if (input?.files) {
            console.log(input.value);
            let file = input.files[0];
            checkFileSize(file);
            const btnUpload = document.querySelector("#btnUpload");
            btnUpload?.addEventListener("click", () => {
                upload(file).then(r => {
                    console.log("file uploaded.");
                });
            });
        }
    });
}
exports.main = main;


/***/ }),

/***/ 2611:
/*!*****************************************************!*\
  !*** ipfs-utils/src/files/glob-source.js (ignored) ***!
  \*****************************************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 8795:
/*!********************************!*\
  !*** electron-fetch (ignored) ***!
  \********************************/
/***/ (() => {

/* (ignored) */

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors"], () => (__webpack_exec__(3607)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGFBQWEsQ0FBQyxNQUFNLENBQUMsRUFBRSxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDckQsT0FBTyxPQUFPLENBQUM7QUFDbkIsQ0FBQztBQUVELFNBQVMsSUFBSTtJQUNULE1BQU0sU0FBUyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDO0lBQ3RELFNBQVMsRUFBRSxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFRLEVBQVEsRUFBRTtRQUNyRCxJQUFJLEtBQUssQ0FBQztRQUNWLElBQUksQ0FBQyxLQUFLLElBQUksRUFBRTtZQUNaLEtBQUssR0FBcUIsQ0FBQyxDQUFDLE1BQU0sQ0FBQztTQUN0QztRQUNELElBQUksS0FBSyxFQUFFLEtBQUssRUFBRTtZQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3pCLElBQUksSUFBSSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDMUIsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3BCLE1BQU0sU0FBUyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDdkQsU0FBUyxFQUFFLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUU7Z0JBQ3RDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUU7b0JBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUM7Z0JBQ2pDLENBQUMsQ0FBQztZQUNOLENBQUMsQ0FBQztTQUNMO0lBQ0wsQ0FBQyxDQUFDO0FBQ04sQ0FBQztBQUVPLG9CQUFJOzs7Ozs7Ozs7OztBQy9FWjs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY29tcHV0ZS1tZXNoLWNsaWVudC8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9jb21wdXRlLW1lc2gtY2xpZW50Ly4vc3JjL21haW4udHMiLCJ3ZWJwYWNrOi8vY29tcHV0ZS1tZXNoLWNsaWVudC9pZ25vcmVkfC9Vc2Vycy9iZW4vZm9yd29yay9rZW5sYWJzL2NvbXB1dGUtbWVzaC1jbGllbnQvbm9kZV9tb2R1bGVzL2lwZnMtaHR0cC1jbGllbnQvZXNtL3NyY3xpcGZzLXV0aWxzL3NyYy9maWxlcy9nbG9iLXNvdXJjZS5qcyIsIndlYnBhY2s6Ly9jb21wdXRlLW1lc2gtY2xpZW50L2lnbm9yZWR8L1VzZXJzL2Jlbi9mb3J3b3JrL2tlbmxhYnMvY29tcHV0ZS1tZXNoLWNsaWVudC9ub2RlX21vZHVsZXMvaXBmcy11dGlscy9zcmN8ZWxlY3Ryb24tZmV0Y2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHttYWlufSBmcm9tICcuL21haW4nO1xuXG53aW5kb3cub25sb2FkID0gbWFpbjsiLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCJcbmltcG9ydCB7Y3JlYXRlIGFzIElwZnNIdHRwQ2xpZW50fSBmcm9tICdpcGZzLWh0dHAtY2xpZW50J1xuXG5jb25zdCBGSUxFX0xJTUlUX01CID0gMS41O1xuY29uc3QgRklMRV9MSU1JVF9CWVRFUyA9IEZJTEVfTElNSVRfTUIgKiAxMDI0ICogMTAyNDtcbmNvbnN0IENMSUVOVF9JRCA9IFwiY2xpZW50MVwiO1xuY29uc3QgSVBGU19BUEkgPSBcIi9pcDQvNTIuMTQuMjExLjI0OC90Y3AvNTAwMVwiO1xuXG5hc3luYyBmdW5jdGlvbiBnZXRFeGVjdXRvcigpOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnN0IEdFVF9VUkwgPSBgaHR0cDovL2xvY2FsaG9zdDo4NzY5L2V4ZWN1dGU/Y2xpZW50PSR7Q0xJRU5UX0lEfWA7XG5cbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChHRVRfVVJMLCB7XG4gICAgICAgICAgICBoZWFkZXJzOiB7J0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbic6ICcqJ31cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhXG4gICAgfSBjYXRjaCAoZXhjZXB0aW9uKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBFUlJPUiByZWNlaXZlZCBmcm9tICR7R0VUX1VSTH06ICR7ZXhjZXB0aW9ufWApO1xuICAgIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gdXBsb2FkKGZpbGU6IEZpbGUpIHtcbiAgICBsZXQgZXhlY3V0b3JJbmZvID0gYXdhaXQgZ2V0RXhlY3V0b3IoKVxuICAgIGxldCByZXF1ZXN0VG9waWMgPSBleGVjdXRvckluZm8ubWVzc2FnZS5SZXF1ZXN0VG9waWNcbiAgICBsZXQgcmVzcG9uc2VUb3BpYyA9IGV4ZWN1dG9ySW5mby5tZXNzYWdlLlJlc3BvbnNlVG9waWNcbiAgICBjb25zb2xlLmxvZyhgZmV0Y2ggZXhlY3V0b3IgdG9waWNzOiBcXG4gcmVxdWVzdD0ke3JlcXVlc3RUb3BpY31cXG4gcmVzcG9uc2U9JHtyZXNwb25zZVRvcGljfWApXG5cbiAgICAvLyBAdHMtaWdub3JlXG4gICAgY29uc3QgaXBmcyA9IElwZnNIdHRwQ2xpZW50KElQRlNfQVBJKTtcbiAgICBmaWxlLmFycmF5QnVmZmVyKCkudGhlbihidWYgPT4ge1xuICAgICAgICBjb25zdCBkYXRhID0gbmV3IFVpbnQ4QXJyYXkoYnVmKVxuICAgICAgICBpcGZzLnB1YnN1Yi5wdWJsaXNoKHJlcXVlc3RUb3BpYywgZGF0YSlcbiAgICAgICAgY29uc29sZS5sb2coYGRhdGEgc2VudDogJHtkYXRhfWApXG4gICAgfSlcblxuICAgIGF3YWl0IGlwZnMucHVic3ViLnN1YnNjcmliZShyZXNwb25zZVRvcGljLCBtc2cgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhtc2cpXG4gICAgfSlcbn1cblxuZnVuY3Rpb24gY2hlY2tGaWxlU2l6ZShmaWxlOiBGaWxlKTogYm9vbGVhbiB7XG4gICAgbGV0IGZpbGVfb2sgPSBmYWxzZTtcbiAgICBsZXQgYWxlcnREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFsZXJ0XCIpO1xuICAgIGlmIChhbGVydERpdikge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKT8ucmVtb3ZlQ2hpbGQoYWxlcnREaXYpO1xuICAgIH1cbiAgICBpZiAoZmlsZS5zaXplIDw9IEZJTEVfTElNSVRfQllURVMpIHtcbiAgICAgICAgZmlsZV9vayA9IHRydWU7XG4gICAgICAgIHJldHVybiBmaWxlX29rO1xuICAgIH1cbiAgICBsZXQgd2FybmluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgd2FybmluZy5jbGFzc0xpc3QuYWRkKFwibXQtM1wiLCBcImFsZXJ0XCIsIFwiYWxlcnQtd2FybmluZ1wiKTtcbiAgICB3YXJuaW5nLnNldEF0dHJpYnV0ZShcInJvbGVcIiwgXCJhbGVydFwiKTtcbiAgICB3YXJuaW5nLnRleHRDb250ZW50ID0gXCJGaWxlIGlzIHRvbyBsYXJnZS4gTGltaXQ6IFwiICsgRklMRV9MSU1JVF9NQiArIFwiTUJcIjtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKT8uYXBwZW5kQ2hpbGQod2FybmluZyk7XG4gICAgcmV0dXJuIGZpbGVfb2s7XG59XG5cbmZ1bmN0aW9uIG1haW4oKTogdm9pZCB7XG4gICAgY29uc3QgaW5wdXRGaWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpbnB1dEZpbGVcIilcbiAgICBpbnB1dEZpbGU/LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKGU6IEV2ZW50KTogdm9pZCA9PiB7XG4gICAgICAgIGxldCBpbnB1dDtcbiAgICAgICAgaWYgKGUgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGlucHV0ID0gPEhUTUxJbnB1dEVsZW1lbnQ+ZS50YXJnZXQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlucHV0Py5maWxlcykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coaW5wdXQudmFsdWUpO1xuICAgICAgICAgICAgbGV0IGZpbGUgPSBpbnB1dC5maWxlc1swXTtcbiAgICAgICAgICAgIGNoZWNrRmlsZVNpemUoZmlsZSk7XG4gICAgICAgICAgICBjb25zdCBidG5VcGxvYWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2J0blVwbG9hZFwiKTtcbiAgICAgICAgICAgIGJ0blVwbG9hZD8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgICAgICB1cGxvYWQoZmlsZSkudGhlbihyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJmaWxlIHVwbG9hZGVkLlwiKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfSlcbn1cblxuZXhwb3J0IHttYWlufTsiLCIvKiAoaWdub3JlZCkgKi8iLCIvKiAoaWdub3JlZCkgKi8iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=