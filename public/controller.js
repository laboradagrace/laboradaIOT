
broker = "wss://test.mosquitto.org:8081/mqtt";


  client = mqtt.connect(broker)
  var subTopic = "laborada";
  var pubTopic = "laborada/fan/status";
  var Payload ="";
  var time = moment().format('MMMM Do YYYY, h:mm:ss a')

  $("#b1").click(function(){
    $("#status").text("The fan is currently turned at 1")
    Payload = "The fan is currently turned at 1" +time
    client.subscribe(subTopic)
    client.publish(pubTopic, Payload)
  
    
  })
  $("#b2").click(function(){
    $("#status").text("The fan is currently turned at 2")
    Payload = "The fan is currently turned at 2" +time
    client.subscribe(subTopic)
    client.publish(pubTopic, Payload)
  
  })
  $("#b3").click(function(){
    $("#status").text("The fan is currently turned at 3")
    Payload = "The fan is currently turned at 3" +time
    client.subscribe(subTopic)
    client.publish(pubTopic, Payload)
  })
  $("#off").click(function(){
    $("#status").text("The fan is currently turned off")
    Payload = "The fan is currently turned off" +time
    client.subscribe(subTopic)
    client.publish(pubTopic, Payload)
  
  })


  









