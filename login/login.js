"use strict";
// Function to retrieve the value of a cookie by its name
const getCookieByName = name => {
    const cookies = document.cookie;
    let start = cookies.indexOf(name + "=");
    if (start === -1) {
        return "";
    } else {
        start = start + (name.length + 1);
        let end = cookies.indexOf(";", start);
        if (end === -1) {
            end = cookies.length;
        }
        const cookieValue = cookies.substring(start, end);
        return decodeURIComponent(cookieValue);
    }
};
// Function to set a cookie with a given name, value, and optional expiration days
    const setCookie = (name, value, days) => {
        let cookie = name + "=" + encodeURIComponent(value);
        if (days) {
        cookie += "; max-age=" + days * 24 * 60 * 60;
        }
        cookie += "; path=/";
        document.cookie = cookie;
        };

// Function to delete a cookie by its name
const deleteCookie = name => {
    document.cookie = name + "=''; max-age=0; path=/";

};
// Function to navigate to a specified URL
const goToPage = url => { 
    location=url;

};

