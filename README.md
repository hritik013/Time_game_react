# Timer Challenge Game ⏱️
An engaging React-based timer game where users can test their reflexes and timing skills across various difficulty levels. Personalize your experience by setting your name, and challenge yourself to stop the timer as close to the target time as possible!


## Live Demo
Check out the live version of this project here: 👉 [Live Demo on Netlify](https://game-of-time.netlify.app/)


# Features
### Player Personalization:
   Enter your name, and it will be displayed throughout your game experience.
 #### Difficulty Levels:
 
 Multiple challenges with different target times:
 
• Easy 😮‍💨: 1 second

• Not Easy 🤔: 5 seconds
 
• Hard 🤯: 10 seconds
 
• Pros Needed 😈: 15 seconds

• Real-Time Timer:

•Visual countdown timer with millisecond precision.

#### Sound Effects:

A ticking sound plays while the timer is active.

#### Modal for Results:

•Displays your score and time after you stop the timer or lose the game.

•Responsive Design:

•Fully responsive UI for a seamless experience on all devices.


# How It Works

1. Set Player Name: Enter your name using the input field, and click "Set Name."

2. Choose Difficulty: Select one of the predefined challenges.

3. Start the Timer: Press the "Start Challenge" button, and the timer begins to countdown.

 4. Stop the Timer:

5. Click "Stop Challenge" to pause the timer and submit your result.

6. If the timer runs out, you'll lose the challenge.

7. View Results: A modal displays:

8. Your score (based on how close you were to the target time).

9. Time left when you stopped the timer.



# Technologies Used

o JavaScript: Primary programming language for logic.

o React.js: For building components and managing state.

o HTML: For the structure of the app.

o CSS: For styling and layout.

o React Portals: For rendering modals outside the main DOM hierarchy.

o Audio Effects: Adds realism with a ticking clock sound.

## Installation

#### 1.Clone the repository
```bash
git clone https://github.com/your-username/timer-challenge-game.git
```
### 2.Navigate to the project directory:
```bash
cd timer-challenge-game
```
### 3.Install dependencies:
```bash
npm install
```
### 4.Start the development server:
```bsh
npm run dev
```
### 5.Open the app in your browser:
```bash
http://localhost:3000
```


## File Structure

```

timer-challenge-game/
├── public/
│   ├── index.html          # Main HTML file
│   ├── clock-ticking-sound-effect-240503.mp3  # Timer ticking sound
├── src/
│   ├── components/
│   │   ├── Player.jsx      # Player personalization component
│   │   ├── Timer.jsx       # Timer challenge component
│   │   ├── Result.jsx      # Modal for displaying results
│   ├── App.jsx             # Main App component
│   ├── index.css           # Global styles
│   ├── index.js            # Entry point
│   ├── modal/              # React portal root for modals
│       └── index.html
├── package.json
├── README.md
```




