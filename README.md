# Sonos Control System - ERP Edition

## 📋 Description
Système de contrôle audio Sonos, destiné à un usage interne dans un ERP (Établissement Recevant du Public).
Développé par Alexandre Hauff SASU.

Contrôle de 3 zones Sonos en réseau local :
- Salle principale
- Petite salle
- Terrasse

Interface Web simple (Contrôle / Monitoring) protégée par mot de passe.

---

## 🛠 Technologies utilisées
- **Node.js + Express** (licence MIT)
- **node-sonos** (lib Sonos non officielle, licence MIT)
- **Docker / Docker Compose** pour déploiement facile
- **HTML/JS simple** pour les interfaces utilisateurs

---

## 🔐 Sécurité
- **Pas de clé API sensible** codée en dur
- **IP locales Sonos** seulement (dans `config/zones.json`)
- **Mot de passe simple configuré** dans `config/auth.json`
- **Pas de communication extérieure**, 100% réseau local
- **Logo** chargé depuis URL externe sécurisée

---

## 📦 Installation (Raspberry Pi)

```bash
git clone https://github.com/alexter35/erp-sonos-dashboard.git
cd erp-sonos-dashboard
docker compose up -d
```

---

## 🔐 Accès

- http://IP_DU_PI/control.html → contrôle
- http://IP_DU_PI/monitoring.html → supervision

---

## ⚙️ Configuration

- `config/zones.json` : IP fixes des enceintes
- `config/playlists.json` : radios et playlists
- `config/auth.json` : mot de passe d'accès

---

## 🔄 Reboot auto
Configurer le reboot à 5h du matin :

```bash
sudo crontab -e
```

Ajouter :
```
0 5 * * * /sbin/reboot
```