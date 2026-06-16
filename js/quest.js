export class QuestLog{
constructor(){this.quests={};}
start(id){this.quests[id]="active";}
finish(id){this.quests[id]="done";}
isDone(id){return this.quests[id]==="done";}
}