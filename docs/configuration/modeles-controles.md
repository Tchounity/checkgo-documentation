# Modèles de contrôles

Un modèle de contrôle est une liste structurée d'étapes à suivre lors d'un [état des lieux](../lexique.md#etat-des-lieux). Chaque groupe de véhicules peut avoir un ou plusieurs modèles assignés selon le contexte (départ, retour, remplacement, préparation).

## Création d'un modèle

1. Accédez au menu **Contrôle** > **Modèles**.
2. Cliquez sur **Ajouter**.
3. Renseignez :
    - Le **propriétaire de flotte**
    - Le **nom du modèle**
4. Définissez les étapes du modèle (voir ci-dessous).

## Étapes disponibles

1. **Photos de parties spécifiques** :
    - demande de photos (ex : phare avant gauche, pare-choc…).
2. **Vérification des dégâts** :
    - Zones standards (avant, arrière, gauche, droite)
    - Zones personnalisées configurées par l'administrateur
    - Option "photo de la zone" pour forcer une photo en cas de dégât
3. **Formulaire** :
    - **Section générale** :
        - carburant (en 1/8)
        - kilométrage
        - photo tableau de bord
        - photo du VIN
        - place de stationnement
    - **Éléments présents dans le véhicule** :
        - liste personnalisable
4. **Contrôle propreté** :
    - Intérieur / Extérieur (notation sur 5)
    - Présence d'odeur de cigarette (oui/non)
    !!! tip
        Une photo est automatiquement demandée si la note est inférieure à 3/5.
5. **Résumé et signature client** :
    - résumé de l'état des lieux + signature
6. **Actions à réaliser** :
    - Type : tâche (obligatoire) ou question (oui/non)
    - Description (traduite)

## Affectation

Chaque modèle peut être assigné à un ou plusieurs cas d'usage :

- **Départ de contrat**
- **Retour de contrat**
- **Remplacement de véhicule**
- **Préparation complète / rapide**

!!! info
    Ces affectations se font au niveau du [groupe de véhicules](./groupes-vehicules.md).
