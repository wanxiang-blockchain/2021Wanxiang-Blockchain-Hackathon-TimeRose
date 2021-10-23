package schedule

import (
	"fmt"
	"github.com/multiformats/go-multiaddr"
)

type ExecutorServerInfo struct {
	RequestTopic  string
	ResponseTopic string
	MultiAddr     multiaddr.Multiaddr
}

var schedulerMap = map[string]*ExecutorServerInfo{
	"client1": {
		RequestTopic:  "Request1",
		ResponseTopic: "Response1",
	},
	"client2": {
		RequestTopic:  "Request2",
		ResponseTopic: "Response2",
	},
	"client3": {
		RequestTopic:  "Request3",
		ResponseTopic: "Response3",
	},
}

func ScheduleExecutorServer(client string) (*ExecutorServerInfo, error) {
	server, ok := schedulerMap[client]
	if !ok {
		return nil, fmt.Errorf("cannot get executor server rightly")
	}
	return server, nil
}
