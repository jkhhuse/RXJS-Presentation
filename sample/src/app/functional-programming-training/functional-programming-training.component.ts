import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-functional-programming-training',
  templateUrl: './functional-programming-training.component.html',
  styleUrls: ['./functional-programming-training.component.css']
})
export class FunctionalProgrammingTrainingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  //last question answer
  
  //   return movieLists.concatMap(function(movieList) {
  //     return movieList.videos.concatMap(function(video) {
  //       return Array.zip(
  //         video.boxarts.reduce(function(acc,curr) {
  //           if (acc.width * acc.height < curr.width * curr.height) {
  //                 return acc;
  //           }
  //           else {
  //               return curr;
  //           }
  //           }),
  //         video.interestingMoments.filter(function(interestingMoment) {
  //           return interestingMoment.type === "Middle";
  //         }),
  //           function(boxart, interestingMoment) {
  //           return {id: video.id, title: video.title, time: interestingMoment.time, url: boxart.url};
  //           });
  //     });
  //   });


}
