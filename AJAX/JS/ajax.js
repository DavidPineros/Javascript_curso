//AJAX con el objeto XMLHttpRequest

(() => {
  const xhr = new XMLHttpRequest(),
    $xhr = document.getElementById("xhr"),
    $fragment = document.createDocumentFragment();

  xhr.addEventListener("readystatechange", (e) => {
    if (xhr.readyState !== 4) return;
    //console.log(xhr);
    if (xhr.status >= 200 && xhr.status < 300) {
      //console.log("Exito");
      // console.log(xhr.responseText);
      //$xhr.innerHTML = xhr.responseText;
      let json = JSON.parse(xhr.responseText);
      //console.log(json);

      json.forEach((el) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
        $fragment.appendChild($li);
      });

      $xhr.appendChild($fragment);
    } else {
      //console.log("Error");
      let message = xhr.statusText || "Ocurrio un error";
      $xhr.innerHTML = `Error ${xhr.status}: ${message}`;
    }
  });
  xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
  //xhr.open("GET", "assets/users.json");
  xhr.send();
})();

//AJAX con API  Fetch

(() => {
  const $fetch = document.getElementById("fetch"),
    $fragment = document.createDocumentFragment();

  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      //console.log(res);
      return res.ok ? res.json() : Promise.reject(res);
    })
    .then((json) => {
      //console.log(json);
      //$fetch.innerHTML = json;
      json.forEach((el) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
        $fragment.appendChild($li);
      });

      $fetch.appendChild($fragment);
    })
    .catch((err) => {
      console.log(err);
      let message = err.statusText || "Ocurrio un error";
      $fetch.innerHTML = `Error ${err.status}: ${message}`;
    })
    .finally(() => {
      //console.log("Esto se ejecutara sin importar el resultado de la promesa Fetch");
    });
})();

//AJAX con API Fetch+ Async-Await

(() => {
  const $fetchAsync = document.getElementById("fetch-async"),
    $fragment = document.createDocumentFragment();

  async function getData() {
    try {
      let res = await fetch("https://jsonplaceholder.typicode.com/users"),
        json = await res.json();

      console.log(res, json);

      //if (!res.ok) throw new Error("Ocurrio un Error al solicitar los Datos");
      if (!res.ok) throw { status: res.status, statusText: res.statusText };

      json.forEach((el) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
        $fragment.appendChild($li);
      });
      $fetchAsync.appendChild($fragment);
    } catch (err) {
      //console.log("Estoy en el catch", err);
      let message = err.statusText || "Ocurrio un error";
      $fetchAsync.innerHTML = `Error ${err.status}: ${message}`;
    } finally {
      console.log("Esto se ejecutara independientemente del try catch");
    }
  }

  getData();
})();