  Template.accueilTemplate.events({
    'submit #register-form' : function(e, t) {
      e.preventDefault();
      var email = t.find('#account-email').value
        , password = t.find('#account-password').value;

        // Trim and validate the input
        var trimInput = function(val) {
        return val.replace(/^\s*|\s*$/g, "");
        }
        var email = trimInput(email);
      
       var isValidPassword = function(val) {
         return val.length ; 
      }
       if (isValidPassword(password)>6)  {
           Accounts.createUser(email, password);
      };

      Accounts.createUser({email: email, password : password}, function(err){
          if (err) {
            // Inform the user that account creation failed
          } else {
            // Success. Account has been created and the user
            // has logged in successfully. 
          }

        });

      return false;
    }
  });