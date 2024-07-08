const jsonURL = "https://jsonplaceholder.typicode.com/posts";

// get request addEventListener

// const getRequest = (url) => {
//   const xhr = new XMLHttpRequest();
//   xhr.open("GET", url);
//   xhr.addEventListener("readystatechange", () => {
//     if (xhr.readyState === 4) {
//       if (xhr.status === 200) {
//         const response = JSON.parse(xhr.responseText);
//         console.log(response);
//       } else {
//         console.log(`${xhr.status} - Couldn't fetch the data`);
//       }
//     }
//   });
//   xhr.send();
// };

// getRequest(jsonURL);


// get request onreadystatechange

// const getReq = (url) => {
//     const xhr = new XMLHttpRequest()
//     xhr.open("GET", url)
//     xhr.onreadystatechange = () => {
//         if (xhr.readyState === 4) {
//             if (xhr.status === 200) {
//               const response = JSON.parse(xhr.responseText);
//               console.log(response);
//             } else {
//               console.log(`${xhr.status} - Couldn't fetch the data`);
//             }
//           }
//     }
//     xhr.send()
// }

// getReq(jsonURL)

// // GET - POST - PUT - PATCH - DELETE

const getRequest = (url) => {
  const xhr = new XMLHttpRequest();
}


// const getRequest = (url) => {
//     const xhr = new XMLHttpRequest();
//     xhr.open("GET", url);
//     xhr.onreadystatechange = () => {
//       if (xhr.readyState === 4) {
//         if (xhr.status === 200) {
//           const response = JSON.parse(xhr.responseText);
//           console.log(response);
//         } else {
//           console.log(`${xhr.status} - Couldn't fetch the data`);
//         }
//       }
//     };
//     xhr.send();
//   };
  
//   getRequest(jsonURL);




const postRequest = (url, data) => {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", url);
    xhr.onreadystatechange = () => {
        if(xhr.readyState === 4) {
            if(xhr.status===201){
                const response = JSON.parse(xhr.responseText);
                console.log(response);
            }
            else{
                console.log(`${xhr.status} - Couldn't post the data`);
            }
        }
    }
    xhr.send(JSON.stringify(data));
}
postRequest(jsonURL)





// const putRequest = (url, data) => {
//     const xhr = new XMLHttpRequest();
//     xhr.open("PUT", url);
//     xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
//     xhr.onreadystatechange = () => {
//       if (xhr.readyState === 4) {
//         if (xhr.status === 200) {
//           const response = JSON.parse(xhr.responseText);
//           console.log(response);
//         } else {
//           console.log(`${xhr.status} - Couldn't update the data`);
//         }
//       }
//     };
//     xhr.send(JSON.stringify(data));
//   };
  
//   const posted = {
//     id: 1,
//     title: "title",
//     body: "body",
//     userId: 1,
//   }; 
//   putRequest(`${jsonURL}/1`, posted);



//   const patchRequest = (url, data) => {
//     const xhr = new XMLHttpRequest();
//     xhr.open("PATCH", url);
//     xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
//     xhr.onreadystatechange = () => {
//       if (xhr.readyState === 4) {
//         if (xhr.status === 200) {
//           const response = JSON.parse(xhr.responseText);
//           console.log(response);
//         } else {
//           console.log(`${xhr.status} - Couldn't partially update the data`);
//         }
//       }
//     };
//     xhr.send(JSON.stringify(data));
//   };
  
//   const patched = {
//     title: "updated title",
//   };
  
//   patchRequest(`${jsonURL}/1`, patched);

  


  const deleteRequest = (url) => {
    const xhr = new XMLHttpRequest();
    xhr.open("DELETE", url);
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          console.log("silinme basarili");
        } else {
          console.log(`${xhr.status} - Hata!`);
        }
      }
    };
    xhr.send();
  };
  
  deleteRequest(`${jsonURL}/1`);
  
