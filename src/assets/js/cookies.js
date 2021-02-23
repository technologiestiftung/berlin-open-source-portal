const cookieBanner = document.querySelector("#cookie-banner");

let cookiesAreAccepted =
  document.cookie
    .split("; ")
    .find((row) => row.startsWith("cookiesAccepted")) !== undefined
    ? true
    : false;

if (cookiesAreAccepted) {
  cookieBanner.remove();
}

if (!cookiesAreAccepted) {
  const cookieButton = document.querySelector("button#accept-cookies");

  cookieButton.onclick = () => {
    acceptCookies();
    cookieBanner.remove();
  };
}

const acceptCookies = () => {
  document.cookie = "cookiesAccepted=true;path=/;max-age=31536000;";
};
