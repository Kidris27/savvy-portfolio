export default function Contact(){
    return `
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Contact Me</title>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Anonymous+Pro">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.0/css/all.css" integrity="sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt" crossorigin="anonymous">
</head>
<body>
    <h1>Feedback</h1>  

    <form action="//formspree.io/kayodeidrisjr@gmail.com" method="POST">       
        <input type="text" name="firstname" placeholder="First Name" size="85" autofocus>
        <input type="text" name="lastname" placeholder="Last Name" size="85">
        <input type="email" name="userEmail" placeholder="your.email@example.com" size="85">
      
        <label>What's this message about?
          <input type="radio" name="subject" value="professional" checked><span>I'd like to hire you!</span>
          <input type="radio" name="subject" value="personal" checked><span>Personal message</span>
          <input type="radio" name="subject" value="other" checked><span>Don't know/something else</span>
        </label>
      
       <!-- <input type="checkbox" name="optin" value="trusting" checked>Subscribe me to your newsletter!
        <input type="checkbox" name="optout" value="skeptical" disabled>Cheeky checkbox... -->
      
        <label for="marketing"><br>How did you hear about me?</br></label>
        <select name="marketing">
          <optgroup label="Online">
            <option value="social">Social Media (FB, Twitter, LinkedIn)</option>
            <option value="github">Online Portfolio (GitHub)</option>
            <option value="search">Search Engine</option>
            <option value="email">Email</option>
          </optgroup>
          <optgroup label="In-Person">
            <option value="networking">We met at a networking event</option>
            <option value="referral">Personal referral</option>
            <option value="random">We met somewhere else</option>
          </optgroup>
          <option value="other">Other</option>
        </select>
      
        <textarea name="user_message" rows="5" cols="95"></textarea>
        <input type="submit">
      </form>
</body>
</html>
`;
}