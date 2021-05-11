/**
 *
 * @summary Github finder
 * @author Sushant Poojary <sushanthapoojary@gmail.com>
 *
 * Created at     : 2021-05-10
 * Last modified  : 2021-05-11
 */

// Instantiate GitHub
github = new Github();

// Instantiate UI
const ui = new UI();

// Search input
const searchUser = document.getElementById('searchUser');

// Search input event listener
searchUser.addEventListener('keyup', (e)=>{
    // Get input text
    const userText = e.target.value;

    if(userText !== ''){
        // Make http call
        github.getUser(userText)
        .then(data => {
           if(data.profile.message === 'Not Found') {
            //    Show alert
            ui.showAlert('User not found', 'alert alert-danger');
           } else {
            //    Show profile
            ui.showProfile(data.profile);
            ui.showRepos(data.repos);
           }
        })
    } else {
        // Clear profile
        ui.clearProfile();
    }
    e.preventDefault();
});