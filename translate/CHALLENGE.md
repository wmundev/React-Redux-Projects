# Coding exercise
I want to be able to specify a start and end time on a website, and calculate the duration between those times

## Requirements
- Time is in the 24 hours format
- I want to specify a start time using 3 input boxes 
  - labelled as "hours"
    - it should only accept a range of number from 0 - 23 
  - labelled as "minutes"
    - it should only accept a range of number from 0 - 59 
  - labelled as "seconds"
    - it should only accept a range of number from 0 - 59
- These three input boxes should be grouped together using another div container under a title called "Start Time"

- I also want to specify a end time using 3 input boxes
    - labelled as "hours"
        - it should only accept a range of number from 0 - 23
    - labelled as "minutes"
        - it should only accept a range of number from 0 - 59
    - labelled as "seconds"
        - it should only accept a range of number from 0 - 59
- These three input boxes should be grouped together under a title called "End Time"

- The duration should be calculated automatically every time the user enters a new input
- When the duration calculated is negative, it should display an error "Start time cannot be after end time"
- When the duration calculated is positive, it should display the result in the format (Duration - Hours: x, Minutes: x, Seconds: x)


Example of how the final product should look like - https://wilsonmun.me/project/time-calculator

The UI design doesn't have to be like for like

You can install any library you like but please avoid installing a date time library (like moment js) to solve this problem

## example test cases
- test that the start time hours input box accepts the input 11
- test that the duration displays an error when end time is after start time
- ... (your other test cases)

