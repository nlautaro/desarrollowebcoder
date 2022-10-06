// GET APIs 

var form = document.getElementById("my-form");
    
    async function handleSubmit(event) {
      event.preventDefault();
      var status = document.getElementById("my-form-status");
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        if (response.ok) {
          status.innerHTML = 
          
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Enviado correctamente!',
            showConfirmButton: false,
            timer: 1500
          });
          
          form.reset()
        } else {
          response.json().then(data => {
            if (Object.hasOwn(data, 'errors')) {
              status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
            } else {
              status.innerHTML = "Lo sentimos, ha habido un error al enviar el mail"
            }
          })
        }
      }).catch(error => {
        status.innerHTML = "Lo sentimos, ha habido un error al enviar el mail"
      });
    }
    form.addEventListener("submit", handleSubmit)