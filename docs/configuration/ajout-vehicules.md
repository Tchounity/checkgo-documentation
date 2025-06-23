# Ajout de véhicules

Cette section décrit les différentes méthodes pour ajouter des véhicules à votre [flotte](../lexique.md#flotte) dans le portail Check&Go.

## Ajout manuel

L'ajout manuel permet d'enregistrer un ou plusieurs véhicules depuis le portail :

1. Accédez au menu **Véhicules**.
2. Cliquez sur **Ajouter**.
3. Renseignez les champs requis :

    - **Propriétaire de flotte**
    - **Marque**
    - **Modèle**
    - **Catégorie**
    - **Groupe de véhicules**
    - **Immatriculation**
    - **VIN** (numéro de châssis)
    - **Couleur** (code hexadécimal + nom traduit pour chaque langue)

!!! info "Couleur"
    La couleur du véhicule est affichée sous forme de pastille dans l'application. Il faut donc saisir :

    - un **code couleur hexadécimal** (ex : `#0033FF`)
    - un **nom de couleur traduit** dans toutes les langues supportées (ex : `bleu` / `blue` / `azul`…).

## Import via fichier

Pour ajouter plusieurs véhicules en une seule fois, utilisez le fichier d'import :

1. Téléchargez le [**modèle de fichier d'import**](https://docs.google.com/spreadsheets/d/1dkxw2w8ypmjnb3ScyEPrjVcnbVbXglF_08x92-3VIQM/edit?usp=sharing){:target="_blank"}.
2. Remplissez les colonnes requises :

    - **Propriétaire de flotte**
    - **Immatriculation**
    - **VIN**
    - **Kilométrage**
    - **Modèle du véhicule**
    - **Groupe de véhicules**
    - **Couleur hexadécimale**
    - **Nom de la couleur** dans chaque langue

!!! warning "Correspondance exacte requise"
    Les noms du **modèle de véhicule** et du **groupe de véhicules** doivent déjà exister sur le portail et être strictement identiques (caractères, espaces, accents, etc.), sinon l'import échouera.

## Contrôle préparatoire

Tout véhicule nouvellement ajouté est marqué comme **non préparé**.

Il devra passer par un **contrôle préparatoire** (voir [Modèles de contrôles](./modeles-controles.md)) pour être marqué comme prêt à la location.
