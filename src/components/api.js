const apiConfig = {
    baseUrl: "https://nomoreparties.co/v1/wff-cohort-5",
    headers: {
      authorization: "e41c01f2-4a0b-4719-ad85-cb98bd2b339d",
      "Content-Type": "application/json",
    },
};

const handleResponse = (res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  };

function getCards() {
    return fetch(apiConfig.baseUrl+'/cards', {
      headers: apiConfig.headers,
    })
    .then(handleResponse);
}

function getProfile() {
    return fetch(apiConfig.baseUrl+'/users/me', {
        headers: apiConfig.headers,
    })
    .then(handleResponse);
}

function likeCard(id) {
    return fetch(apiConfig.baseUrl+'/cards/likes/' +id, {
        method: 'PUT',  
        headers: apiConfig.headers,
      })
      .then(handleResponse)
}

function unlikeCard(id) {
  return fetch(apiConfig.baseUrl+'/cards/likes/' +id, {
      method: 'DELETE',  
      headers: apiConfig.headers,
    })
    .then(handleResponse)
}

function updateProfile(name, description) {
  return fetch(apiConfig.baseUrl+'/users/me', {
      method: 'PATCH',
      headers: apiConfig.headers,
      body: JSON.stringify({
          name: name,
          about: description
      })
  })
  .then(handleResponse);
}

function updateProfileImage(link) {
  return fetch(apiConfig.baseUrl + "/users/me/avatar", {
    method: 'PATCH',  
    headers: apiConfig.headers,
    body: JSON.stringify({
      avatar: link
    })
  })
  .then(handleResponse)
}

function postNewCard(name, link) {
    return fetch(apiConfig.baseUrl +"/cards", {
        method: 'POST',  
        headers: apiConfig.headers,
        body: JSON.stringify({
          name: name,
          link: link
        })
      })
      .then(handleResponse)
}

function deleteCard(id) {
    return fetch(apiConfig.baseUrl+ "/cards/" +id, {
        method: 'DELETE',  
        headers: apiConfig.headers,
      })
      .then(handleResponse)
}


export {getCards, getProfile, updateProfile, likeCard, unlikeCard, postNewCard, deleteCard, updateProfileImage}