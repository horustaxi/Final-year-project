/**
 * Created by Garret on 11-Feb-17.
 */
import { Component } from '@angular/core';
import {NavController, List} from 'ionic-angular';
import {WorkoutsPage} from '../workouts/workouts';
import {WorkoutService} from "../../app/service/workout-service";
import {AddAExercisePage} from '../add-a-exercise/add-a-exercise';
@Component({
    selector: 'add-a-workout',
    templateUrl: 'add-a-workout.html'
})
export class AddAWorkoutPage {
    //Declaring variables
    public Sets: String;
    public Reps : String;
    public Weight: number;
    public result : any;
    public workouts : any;
    public Exercise : any;
    public newExercise :any;

    constructor(public navCtrl: NavController, private workoutService:WorkoutService){
        
    }

    /**
     * on Init 
     * Get the workout list
     */
     
    ngOnInit(){
        
    this.workoutService.getWorkout1().subscribe(workouts => {
      this.workouts = workouts;
      workouts.toString();
      console.log();
    });
  }
  
   ionViewWillEnter(){

    this.workoutService.getWorkout1().subscribe(workouts => {
      this.workouts = workouts;
    });
  }

    onSubmit(){
        var workout = {
            Sets: this.Sets,
            Reps: this.Reps,
            Weight : this.Weight,
            Exercise: this.Exercise
        }

        //add workout using service eg the database list
        this.workoutService.addWorkout(workout).subscribe(data => {
            this.result = data;
        });

        this.navCtrl.push(WorkoutsPage);
        
    }

    onSubmit1(){
        var AddExercise = {
       Exercise : this.newExercise 
    }

        //add workout using service eg the database list
        this.workoutService.addNewExercise(AddExercise).subscribe(data => {
            this.result = data;
        });

        this.navCtrl.push(WorkoutsPage);
        
    }

    navToAddExercise(){
         this.navCtrl.push(AddAExercisePage);
    }

}
