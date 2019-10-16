import { Router } from "express";
class GameRuotes{
    public router: Router= Router();
    constructor(){
        this.config();
    }
    config():void{
        this.router.get("/",(req,res)=>res.send("Games"))
    }
}
 const gameRuotes = new GameRuotes();
 export default gameRuotes.router;