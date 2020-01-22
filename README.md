# README

Done:
- #1 (Select Care Type)
    - Navigation bar allows user to go to login and splash page.
    - User can select overall/emotional health
- #3a (Sign up) 
    - User password is hashed before it is stored in the database.
    - Display error messages when email has been taken, email is invalid, password is invalid
- #3b (login)
    - User credentials are verified safely. 
    - Display different error messages when user inputs unregistered email or incorrect password


To Do:
- General:
    - Add Favicon
- #1 (Select Care Type)
    - Not responsive to mobile screen sizes.
- #3a (Sign up)
    - Not responsive to mobile screen sizes.
    - User should see password strength/password requirements
- #3b (Login)
    - Not responsive to mobile screen sizes.
    - User can switch to register form by clicking on "create account" above form
    
schedule
- Days where all the slots are now passed shouldn't be highlighted.
- Los Angeles disables today, which shouldn't happen.
- removed height of form when no date is chosen. Make sure it looks good when a date is chosen.




1) make new table for actual meetings when doctors/patients need to talk. It has patientid, doctorid, starttime
2) the doctor can create slots using doc_availability_form component, which the patients can match with. 
- doctors log what times they are available, by half hour slots.
- the start and end times of each of these slot entered are converted to UTC (using moment UTC), then saved
- When a user fetches these time, the UTC times are converted to here current timezone (using moment UTC), and she sees everything perfectly.