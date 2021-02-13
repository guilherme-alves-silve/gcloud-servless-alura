docker run --rm --name api -p 8000:3000 \
-v ~/forum-alura:/config \
-e GOOGLE_APPLICATION_CREDENTIALS=/config/authentication.json \
-e GOOGLE_CLOUD_PROJECT=${GOOGLE_CLOUD_PROJECT} forum-alura
