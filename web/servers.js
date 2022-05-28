function copyAddress(serverId) {
      //Get the text from the serverId-element
      const server = document.getElementById(serverId).innerText;
      const serverAddress = document.getElementById(serverId).getAttribute("data-address");

      //Copy serverAddress to clipboard
      navigator.clipboard.writeText(serverAddress);
      setTimeout(function() {
            alert("Server address copied to clipboard!");
      }, 200)
}