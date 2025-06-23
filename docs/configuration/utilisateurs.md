# Gestion des utilisateurs

Dans Check&Go, il existe deux types d'utilisateurs principaux :

- **Technicien** : intervient sur les véhicules via l'application mobile.
- **Gestionnaire de flotte** : supervise les opérations via le portail web.

!!! info "Note sur les utilisateurs"
    Les conducteurs n'ont pas de compte Check&Go dédié ; ils reçoivent un code d'accès unique par contrat par e-mail.

## Créer un utilisateur

Pour ajouter un nouvel utilisateur :

1. Accédez à l'onglet **Utilisateurs**.
2. Cliquez sur **Ajouter**.
3. Renseignez les champs obligatoires :
    - Prénom
    - Nom
    - Email
    - Compagnie

4. Renseignez les champs complémentaires (facultatifs) :
    - Fuseau horaire (permet d'afficher les heures dans le bon fuseau horaire)
    - Téléphone
    - Adresse
    - Date de naissance
    - ...

## Gérer les droits d'accès

Une fois l'utilisateur créé, vous pouvez définir ses accès dans l'onglet **Droits d'accès**.

Deux catégories de droits sont disponibles :

#### Application technicien (mobile)
- Activer l'accès à l'application.
- Spécifier la flotte de véhicules gérée.

#### Portail web (Check&Go)
- Activer l'accès au Portail.
- Spécifier la flotte de véhicules gérée.

## Paramétrer l'application technicien

Chaque technicien peut avoir une configuration personnalisée de l'application mobile.

Voici les options disponibles :

#### Mode de recherche de véhicule
- **Mode libre** : recherche possible via 3 lettres/chiffres (plaque, VIN ou modèle).
- **Plaque complète obligatoire** : plus strict, limite les erreurs.

!!! tip "Recommandation"
    Il est recommandé d'activer la saisie de la plaque complète pour limiter les risques de confusion. Le mode libre convient aux techniciens expérimentés.

#### Accès au menu de l'application
- Permet d'afficher ou non les rubriques :
    - Accueil
    - Contrats
    - Contrôles

#### Affichage de l'identifiant contrat
- Affiche ou masque l'identifiant Rentway du contrat dans l'application.

!!! info "Information"
    Ces paramètres sont définis individuellement pour chaque technicien.