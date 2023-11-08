import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
import { closeModal } from '../scripts/modal.js'

const supabase = createClient("https://bcnprfmbopxwnigwqtvo.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJjbnByZm1ib3B4d25pZ3dxdHZvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk0MDcyNTgsImV4cCI6MjAxNDk4MzI1OH0.oOjhI1rS2za1gXXD1KgTqdh5u35j04t1VzsRH41jfaA")

async function login() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  const { data, error } = await supabase
    .from('users')
    .select()

  for (var user of data) {
    if (user["username"] == username && user["password"] == password) {
      sessionStorage["logged_in"] = "true";
      sessionStorage["user"] = username;

      document.getElementById("username").value = "";
      document.getElementById("password").value = "";

      var name = document.getElementById("logged-in-username");
      name.innerHTML = username;

      closeModal();
    }
  }
}

globalThis.login = login;