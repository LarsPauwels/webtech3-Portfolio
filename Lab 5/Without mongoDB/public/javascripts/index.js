class Lab {
  check() {
    this.url = document.querySelector(".labcheckInput").value;
    
    this.checkRequest1();
    this.checkRequest2();
    this.checkRequest3();
    this.checkRequest4();
    this.checkRequest5();
    this.checkRequest6();
  }
  
  checkRequest1() {
    let url = `${this.url}/messages`;
    let output = document.querySelector(".labcheck__output1 span");
    let options = { method: 'GET' };
    let request = new Request(url, options);
    
    fetch(request).then( res => {
       return res.json();                 
    }).then( json => {
      output.innerHTML = JSON.stringify(json);
    });
    
  }
  
  checkRequest2() {
    let url = `${this.url}/messages/911`;
    let output = document.querySelector(".labcheck__output2 span");
    let options = { method: 'GET' };
    let request = new Request(url, options);
    
    fetch(request).then( res => {
       return res.json();                 
    }).then( json => {
      output.innerHTML = JSON.stringify(json);
    });
    
  }
  
  checkRequest3() {
    let data = {
      "message": {
          "text": "Hi! I'm a message",
          "user": "pikachu"
      }
    };
    let url = `${this.url}/messages`;
    let output = document.querySelector(".labcheck__output3 span");
    let options = { method: 'POST', cache:"no-cache", body: JSON.stringify(data), headers: {
            "Content-Type": "application/json",
     } };
    let request = new Request(url, options);
    
    fetch(request, data).then( res => {
       return res.json();                 
    }).then( json => {
      output.innerHTML = JSON.stringify(json);
    });
    
  }
  
  checkRequest4() {
    let url = `${this.url}/messages/911`;
    let output = document.querySelector(".labcheck__output4 span");
    let options = { method: 'PUT' };
    let request = new Request(url, options);
    
    fetch(request).then( res => {
       return res.json();                 
    }).then( json => {
      output.innerHTML = JSON.stringify(json);
    });
    
  }
  
  checkRequest5() {
    let url = `${this.url}/messages/911`;
    let output = document.querySelector(".labcheck__output5 span");
    let options = { method: 'DELETE' };
    let request = new Request(url, options);
    
    fetch(request).then( res => {
       return res.json();                 
    }).then( json => {
      output.innerHTML = JSON.stringify(json);
    });
    
  }
  
  checkRequest6() {
    let url = `${this.url}/messages?user=pikachu`;
    let output = document.querySelector(".labcheck__output6 span");
    let options = { method: 'GET' };
    let request = new Request(url, options);
    
    fetch(request).then( res => {
       return res.json();                 
    }).then( json => {
      output.innerHTML = JSON.stringify(json);
    });
    
  }
}

document.querySelector(".btnCheck").addEventListener("click", function(e){
    let lab = new Lab();
    lab.check();
});