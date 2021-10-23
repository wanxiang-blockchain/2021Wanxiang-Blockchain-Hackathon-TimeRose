package main

import (
	"PubSubScheduler/schedule"
	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()

	r.OPTIONS("/execute", func(c *gin.Context) {
		c.Header("Access-Control-Allow-Origin", "*")
		c.Header("Access-Control-Allow-Headers", "Access-Control-Allow-Origin")
		return
	})

	r.GET("/execute", func(c *gin.Context) {
		c.Header("Access-Control-Allow-Origin", "*")
		client := c.Query("client")
		if client == "" {
			c.JSON(400, gin.H{
				"message": "nil client info",
			})
			return
		}

		executorServer, err := schedule.ScheduleExecutorServer(client)
		if err != nil {
			c.JSON(409, gin.H{
				"message": err.Error(),
			})
			return
		}

		c.JSON(200, gin.H{
			"message": executorServer,
		})
	})

	r.Run(":8769") //
}
