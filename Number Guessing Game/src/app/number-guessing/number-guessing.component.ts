import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-number-guessing',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './number-guessing.component.html',
  styleUrls: ['./number-guessing.component.css']
})
export class NumberGuessingComponent {
  randomNumber!: number; 
  userGuess!: number;    
  message!: string;      
  attempts!: number;     

  constructor() {
    this.startGame(); 
  }

  
  startGame() {
    this.randomNumber = Math.floor(Math.random() * 10) + 1; 
    this.attempts = 0;   
    this.userGuess = 0;  
    this.message = '';   
  }

 
  checkGuess() {
    this.attempts++; 

   
    if (this.userGuess < this.randomNumber) {
      this.message = 'Too low! Try again.';
    } else if (this.userGuess > this.randomNumber) {
      this.message = 'Too high! Try again.';
    } else {
      this.message = `Congratulations! You guessed the number in ${this.attempts} attempts.`;
      window.location.reload();
    }
  }
}
