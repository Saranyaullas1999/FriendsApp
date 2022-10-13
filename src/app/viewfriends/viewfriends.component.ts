import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewfriends',
  templateUrl: './viewfriends.component.html',
  styleUrls: ['./viewfriends.component.css']
})
export class ViewfriendsComponent implements OnInit {

  constructor() { }


  friendData=[{"_id":"628613a5fb68dd10d6f53366","name":"RAHUL","friendName":"RAMESH","friendNickName":"RAMU","DescribeYourFriend":"Test description","__v":0},{"_id":"62863eb472b33daf7a22b7d5","name":"hhjs","friendName":"sjhq","friendNickName":"wdhd","__v":0},{"_id":"62864e10d5446187887e5f63","name":"Amritha","friendName":"Revathy","friendNickName":"Revu","DescribeYourFriend":"pretty","__v":0},{"_id":"62864eafd5446187887e64b9","name":"Remya","friendName":"Malavika","friendNickName":"Malu","DescribeYourFriend":"Beautiful","__v":0},{"_id":"6286514dd5446187887e9708","name":"Geetha","friendName":"Aavani","friendNickName":"Aavus","DescribeYourFriend":"loveable","__v":0},{"_id":"62865418d5446187887eb625","__v":0},{"_id":"6286560bd5446187887eb679","__v":0},{"_id":"62865636d5446187887eb69f","__v":0},{"_id":"62865693d5446187887eb6a1","name":"Sruthy","friendName":"Jibin","friendNickName":"Thomasuu","DescribeYourFriend":"good listner","__v":0},{"_id":"628656dad5446187887eb6a3","__v":0},{"_id":"6286586cd5446187887eb6a5","name":"Adhi","friendName":"Sruthy","friendNickName":"malu","DescribeYourFriend":"Angry baby","__v":0},{"_id":"62865a06d5446187887eb6a9","name":"ndj","friendName":"dnclmf","friendNickName":"mmkd","DescribeYourFriend":"llkpkf","__v":0},{"_id":"62865abcd5446187887eb6ab","name":"ahhh","friendName":"sjkdc","friendNickName":"ggg","DescribeYourFriend":"hhh","__v":0},{"_id":"62866323d5446187887edcb3","name":"Adhi","friendName":"Sruthy","friendNickName":"malu","DescribeYourFriend":"good girl","__v":0},{"_id":"62866541d5446187887ee59d","name":"Adhi","friendName":"Sruthy","friendNickName":"malu","DescribeYourFriend":"soulmate","__v":0},{"_id":"628669cad5446187887f285c","name":"Anjali","friendName":"Divya","friendNickName":"Devu","DescribeYourFriend":"She is looking very beautiful","__v":0},{"_id":"62866a89d5446187887f395c","name":"Anjali","friendName":"Nidhin","friendNickName":"Nidhi","DescribeYourFriend":"Sincere,loving,caring,etc..etc..etc...","__v":0},{"_id":"62866da3d5446187887f9756","name":"Divya","friendName":"Anjali","friendNickName":"Anju","DescribeYourFriend":"lovable","__v":0},{"_id":"62866ee3d5446187887fad71","__v":0},{"_id":"62866f4dd5446187887fb361","name":"adhi","friendName":"sruthy","friendNickName":"malu","DescribeYourFriend":"soulmate","__v":0},{"_id":"62866fc4d5446187887fbb17","name":"f","friendNickName":"f","DescribeYourFriend":"f","__v":0},{"_id":"62867017d5446187887fc104","name":"f","friendNickName":"f","DescribeYourFriend":"f","__v":0},{"_id":"62868600d544618788806841","name":"reny","friendName":"robin","friendNickName":"achuz","DescribeYourFriend":"cute","__v":0},{"_id":"62868812d544618788806bbd","name":"rema","friendName":"raju","friendNickName":"mikku","DescribeYourFriend":"loveable","__v":0},{"_id":"62868d9ed544618788806e67","name":"Arha","friendName":"Ajay","friendNickName":"Ajaymone","DescribeYourFriend":"brilliant","__v":0},{"_id":"62870261c0a51b451f192376","name":"Ak","__v":0},{"_id":"62870288c0a51b451f19237a","name":"Ak","__v":0},{"_id":"6287037bc0a51b451f19237d","name":"aquaman","__v":0},{"_id":"628703eac0a51b451f192380","name":"aquaman","friendName":"Ak","friendNickName":"Ak boy","DescribeYourFriend":"\nReasonable ","__v":0},{"_id":"62870444c0a51b451f192383","name":"name","friendName":"Rohan","friendNickName":"roboy","DescribeYourFriend":"\nchild","__v":0},{"_id":"62870498c0a51b451f192386","name":"anu","friendName":"ansu","friendNickName":"chotta","DescribeYourFriend":"small as cute","__v":0},{"_id":"6287051ec0a51b451f192389","name":"swa","friendName":"anjali","friendNickName":"anju","DescribeYourFriend":"beautiful & lovely","__v":0},{"_id":"628717e9b6dd2e0afbaaa9d1","name":"anju lex","friendName":"jerin","friendNickName":"chor","DescribeYourFriend":"mandan","__v":0},{"_id":"6287180db6dd2e0afbaaa9ff","name":"anju","friendName":"anila","friendNickName":"mooppi","DescribeYourFriend":"mandi","__v":0},{"_id":"62871840b6dd2e0afbaaaa27","name":"Anila","friendName":"Anju","friendNickName":"Tutti","DescribeYourFriend":"Monna","__v":0},{"_id":"62871b7ab6dd2e0afbaabc26","name":"Mily","friendName":"Leana","friendNickName":"kjdchjks","DescribeYourFriend":"zjkiuedhfk","__v":0},{"_id":"6288c79ba33b945e520b7a87","name":"Lekshmi","friendNickName":"ponnu","DescribeYourFriend":"awesome girl","__v":0},{"_id":"6288c851a33b945e520b7d38","name":"lechu","friendNickName":"achuz","DescribeYourFriend":"she is beautiful and kind","__v":0},{"_id":"6288c8c3a33b945e520b8160","name":"","friendNickName":"","DescribeYourFriend":"","__v":0},{"_id":"6288c971a33b945e520b8696","name":"","friendNickName":"","DescribeYourFriend":"","__v":0},{"_id":"6288d215a33b945e520bac86","name":"Lekshmi s ","friendNickName":"ponnu","DescribeYourFriend":"she is awesome","__v":0},{"_id":"6288d278a33b945e520bb0ef","name":"lekshmi s","friendNickName":"achu","DescribeYourFriend":"she is beautiful and kind","__v":0},{"_id":"6288d3a0a33b945e520bbdfa","name":"","friendNickName":"","DescribeYourFriend":"","__v":0},{"_id":"6288d5c7a33b945e520bd690","name":"","friendName":"HUYHUIH","friendNickName":"","DescribeYourFriend":"","__v":0},{"_id":"628e03951f4821f8277da2a1","name":"Tania","friendName":"Gk","friendNickName":"Gkk","DescribeYourFriend":"She's the best!","__v":0},{"_id":"628e03961f4821f8277da2a3","name":"Tania","friendName":"Gk","friendNickName":"Gkk","DescribeYourFriend":"She's the best!","__v":0},{"_id":"628f64dc349f6eeb66ed66ac","name":"Ramesh","friendName":"Sumesh","friendNickName":"","DescribeYourFriend":"5 Star mittai","__v":0},{"_id":"62e6671a0f3738b7a6114e28","name":"Tom","friendName":"Harisankar","friendNickName":"Hari","DescribeYourFriend":"Genius","__v":0},{"_id":"62e66be30f3738b7a6114e2d","name":"Adithya","friendName":"Malavika","friendNickName":"Malu","DescribeYourFriend":"Small","__v":0},{"_id":"62e6775ff9482c6dc935c5af","name":"hjshaj","friendName":"","friendNickName":"","__v":0},{"_id":"62e67760f9482c6dc935c5b1","name":"hjshaj","friendName":"","friendNickName":"","__v":0},{"_id":"62e67761f9482c6dc935c5b3","name":"hjshaj","friendName":"","friendNickName":"","__v":0},{"_id":"62e67761f9482c6dc935c5b5","name":"hjshaj","friendName":"","friendNickName":"","__v":0},{"_id":"62e67762f9482c6dc935c5b7","name":"hjshaj","friendName":"","friendNickName":"","__v":0},{"_id":"62e6790cf9482c6dc935c5be","name":"sam","friendName":"sundar","friendNickName":"sunny","DescribeYourFriend":"tall","__v":0},{"_id":"62e694298cf071cdfb5a9923","name":"sam","friendName":"Rajendar","friendNickName":"raj","DescribeYourFriend":"tall","__v":0},{"_id":"62e699bc8cf071cdfb5a992c","name":"Ram","friendName":"Rajesh","friendNickName":"raj","DescribeYourFriend":"tall","__v":0},{"_id":"62eb929f66dd75df024c9c0e","name":"sfsfsf","friendName":"dsfsdfdsf","friendNickName":"dfdsfdsfs","DescribeYourFriend":"dfsdfdfd","__v":0},{"_id":"62eb954166dd75df024c9c15","name":"anand","friendName":"anand","friendNickName":"anand","DescribeYourFriend":"friend","__v":0},{"_id":"62eb95ad66dd75df024c9c1d","name":"abhinav","friendName":"anand","friendNickName":"anand","DescribeYourFriend":"friend","__v":0},{"_id":"62eb9aa766dd75df024c9c26","name":"Anandh","friendName":"Abhinav","friendNickName":"Abhi","__v":0},{"_id":"62eb9b1966dd75df024c9c2b","name":"Abhilash","friendName":"Aadhil","friendNickName":"Adhu","DescribeYourFriend":"super","__v":0},{"_id":"62eb9bd166dd75df024c9c3d","name":"anuj","friendName":"akhil","friendNickName":"appu","DescribeYourFriend":"naughty","__v":0},{"_id":"62eb9bd366dd75df024c9c3f","name":"Rocky","friendName":"Raju","friendNickName":"chikku","DescribeYourFriend":"good","__v":0},{"_id":"62eba0d466dd75df024c9c46","friendName":"Tisa","friendNickName":"Tissuu","__v":0},{"_id":"62eba1d366dd75df024c9c4a","name":"Cinta","friendName":"Jefiya","friendNickName":"Jessu","DescribeYourFriend":"Silent","__v":0},{"_id":"62eba1fd66dd75df024c9c4d","name":"Cinta","friendName":"Sandra","friendNickName":"Sundru","DescribeYourFriend":"Smart","__v":0},{"_id":"62eba25166dd75df024c9c51","name":"Cinta","friendName":"Ciya","friendNickName":"Kunj","DescribeYourFriend":"Sweet","__v":0},{"_id":"62ecc99ce74a054c47c6764a","name":"RISAMOL ","friendName":"Shafna","friendNickName":"Cheppu","DescribeYourFriend":"kind","__v":0},{"_id":"63050afaabdc30819c798f88","__v":0},{"_id":"63050afbabdc30819c798f8a","__v":0},{"_id":"63050ccfabdc30819c798f8e","__v":0},{"_id":"63050ec9abdc30819c798f91","name":"sinsan","friendName":"sinan","friendNickName":"sinan","DescribeYourFriend":"sinan","__v":0},{"_id":"63050ed3abdc30819c798f93","name":"sinsan","friendName":"sinan","friendNickName":"sinan","DescribeYourFriend":"sinan","__v":0},{"_id":"63051082abdc30819c798f96","name":"RAJAN","friendName":"RAJENDRAN","friendNickName":"RAJA","DescribeYourFriend":"GOOD FRIEND","__v":0},{"_id":"630525cfabdc30819c799047","name":"HASHIM","friendName":"LIONEL ANDRES MESSI","friendNickName":"LEO","DescribeYourFriend":"GOAT","__v":0},{"_id":"63053236abdc30819c79909f","name":"Amos","friendName":"sinu","friendNickName":"sinka","DescribeYourFriend":"pado","__v":0},{"_id":"6305af4ac5ae88a7aca04dba","__v":0},{"_id":"6305b114c5ae88a7aca04dbe","__v":0},{"_id":"630a322a35d629858718a0cc","name":"7890456789","friendName":"90909090909","friendNickName":"89080808080808","DescribeYourFriend":"890890080908890","__v":0},{"_id":"630a323235d629858718a0ce","name":"7890456789","friendName":"90909090909","friendNickName":"89080808080808","DescribeYourFriend":"890890080908890","__v":0},{"_id":"634820be187b2b63a4c92694","name":"Nevin","friendName":"Jemel","friendNickName":"Jemel","DescribeYourFriend":"Naughty","__v":0},{"_id":"63482b6b187b2b63a4c926d8","name":"Job","friendName":"Lucas","friendNickName":"Beast","DescribeYourFriend":"Arrogant","__v":0},{"_id":"63482b85187b2b63a4c926dd","name":"","friendName":"","friendNickName":"","DescribeYourFriend":"","__v":0},{"_id":"63482bed187b2b63a4c926e1","name":"Anna","friendName":"Job","friendNickName":"Job","DescribeYourFriend":"hacker","__v":0},{"_id":"63482c5e187b2b63a4c926e6","name":"Varshini K","friendName":"Lakshmi Prabha K","friendNickName":"Prabha","DescribeYourFriend":"strong girl and pretty","__v":0},{"_id":"63482caf187b2b63a4c926ed","name":"Minnu","friendName":"Chinnu","friendNickName":"Chinnu","DescribeYourFriend":"Cute","__v":0},{"_id":"63482cde187b2b63a4c926f1","name":"Prabha","friendName":"Varshini","friendNickName":"Ammu","DescribeYourFriend":"Kind Girl","__v":0},{"_id":"63482d36187b2b63a4c926f5","name":"Prabha","friendName":"Varshini","friendNickName":"Ammu","DescribeYourFriend":"Kind Girl","__v":0},{"_id":"63482d4f187b2b63a4c926f8","name":"Jithin Ramesh","friendName":"dharasan","DescribeYourFriend":"No use","__v":0},{"_id":"63482e03187b2b63a4c926fd","name":"jobin","friendName":"pranav","friendNickName":"dhamu","DescribeYourFriend":"helpful","__v":0},{"_id":"63482e4a187b2b63a4c92702","name":"kishore","friendName":"dharanish","friendNickName":"kd","DescribeYourFriend":"cricketer","__v":0},{"_id":"63482f0c187b2b63a4c92707","name":"","friendName":"","friendNickName":"","DescribeYourFriend":"","__v":0},{"_id":"63482f35187b2b63a4c92709","name":"Prabha","friendName":"Varshini","friendNickName":"Ammu","DescribeYourFriend":"Kind Girl","__v":0},{"_id":"63482fea187b2b63a4c9270d","name":"Prabha","friendName":"Varshini","friendNickName":"AMMU","DescribeYourFriend":"Kind Girl","__v":0},{"_id":"63483a6e187b2b63a4c9272b","name":"Mariya","friendName":"Annnena","friendNickName":"Annamma","DescribeYourFriend":"Good Personality","__v":0},{"_id":"63483add187b2b63a4c9272e","name":"Tom","friendName":"Karthik","friendNickName":"Appus","DescribeYourFriend":"Good Character","__v":0},{"_id":"6348446e187b2b63a4c9274d","name":"Shibu","friendName":"Kuttappan","friendNickName":"Kuttan","DescribeYourFriend":"Oh my kuttappan","__v":0}]

  ngOnInit(): void {
  }

}
