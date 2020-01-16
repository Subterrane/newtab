const output=`
NAME                        REPLICAS
ol_access-service           1/1
ol_apps-service             1/1
ol_core-api                 1/1
ol_form-service             1/1
ol_haproxy-flow             1/1
ol_haproxy-swarm-listener   1/1
ol_mfa-service              1/1
ol_monorail-admin           1/1
ol_monorail-portal          1/1
ol_monorail-ui              1/1
ol_onelogin-fed             1/1
ol_onelogin-profile         1/1
ol_postgres                 1/1
ol_rabbitmq                 1/1
ol_redis-server             1/1
ol_traefik                  1/1 (max 1 per node)
ol_web-admin                1/1
ol_web-login                1/1
ol_web-portal               1/1
ol_web-profile              1/1
`;
document.getElementById("terminal").innerText = output.trim();
