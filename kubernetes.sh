gcloud container clusters get-credentials my-first-cluster-1 --region=us-central1-c
kubectl get nodes
kubectl create secret generic forum-alura-api-secret --from-literal=USER=forum-alura --from-literal=PASSWORD=mysecretpassword123
kubectl get secrets
kubectl create deploy api --dry-run=client --image=gcr.io/${GOOGLE_CLOUD_PROJECT}/forum-alura -o yaml
kubectl apply -f deploy-api.yml
kubectl get pods
kubectl logs <ID_POD>
kubectl expose deployment api --port=80 --target-port=3000 --type=LoadBalancer
kubectl get services
