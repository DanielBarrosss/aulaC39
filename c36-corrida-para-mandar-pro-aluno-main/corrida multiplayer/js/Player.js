class Player {
  constructor() {
    this.name = null;
    this.index = null;
    this.positionX = 0;
    this.positionY = 0;
  }

  addPlayer(){
    var playerIdex="players/player"+this.index

    if (this.index===1) {
      this.positionX=width/2-100
    } else {
      this.positionX=width/2+100
    }

    database.ref(playerIdex).set({
      name:this.name,
      positionX:this.positionX,
      name:this.name,
      positionY:this.positionY
    })
  }

  getCount(){
    var playerCountRef=database.ref("playerCount")
    playerCountRef.on("value",data=>{
      playerCount=data.val()
    })
  }

  upDateCount(count){
    database.ref("/").update({
      playerCount:count
    })
  }
}
