function updateNetworkStatus() {
                  const networkStatusElement = document.getElementById('network-status');
                  const networkStatusText = document.getElementById('network-status-text');
                  if (navigator.onLine) {
                        networkStatusElement.style.backgroundColor = 'green';
                        networkStatusText.textContent = 'You are online';
                  } else {
                        networkStatusElement.style.backgroundColor = 'red';
                        networkStatusText.textContent = 'You are offline';
                  }
            }

            window.addEventListener('online', updateNetworkStatus);
            window.addEventListener('offline', updateNetworkStatus);
            updateNetworkStatus(); // Initial check