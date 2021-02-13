docker build -t forum-alura .
docker tag forum-alura gcr.io/${GOOGLE_CLOUD_PROJECT_NAME}/forum-alura
gcloud auth configure-docker
docker push gcr.io/${GOOGLE_CLOUD_PROJECT_NAME}/forum-alura
