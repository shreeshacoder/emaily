    function localtunnel {
      lt -s ronnie1995boyish --port 5000
    }
    until localtunnel; do
    echo "localtunnel server crashed"
    sleep 2
    done