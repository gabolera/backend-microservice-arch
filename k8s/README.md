# K8S Structure


## Folder Structure

```text
k8s/
├── base/                  
│   ├── deployment.yaml
│   ├── service.yaml
│   ├── configmap.yaml
│   └── kustomization.yaml
│
├── overlays/              
│   ├── development/      
│   │   ├── kustomization.yaml
│   │   └── patch.yaml
│   │
│   ├── staging/          
│   │   ├── kustomization.yaml
│   │   └── patch.yaml
│   │
│   └── production/       
│       ├── kustomization.yaml
│       └── patch.yaml
│
├── secrets/              
    └── templates/
```

1. **Base**: All basic settings that are common to all environments
2. **Overlays**: Contains customizations specific to each environment
3. **Secrets**: Templates for secrets (not versioned in git)

## Isage

Commands to apply configurations

```bash
# Dev
kubectl apply -k k8s/overlays/development

# Staging
kubectl apply -k k8s/overlays/staging

# Production
kubectl apply -k k8s/overlays/production
```

## Best Practices

1. Use Kustomize to manage different environments
2. Keep secrets out of version control
3. Use namespaces to isolate environments
4. Document all specific configurations
5. Keep related resources grouped together