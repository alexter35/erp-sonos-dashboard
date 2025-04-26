# Sonos Control System (ERP)

## 📦 Installation (Raspberry Pi)

```bash
git clone https://github.com/TON_DEPOT/erp-sonos-dashboard.git
cd erp-sonos-dashboard
docker compose up -d
```

## 🔐 Accès

- http://IP_DU_PI/control.html → contrôle
- http://IP_DU_PI/monitoring.html → supervision

## ⚙️ Configuration

- `config/zones.json` : IP fixes des enceintes
- `config/playlists.json` : radios et playlists
- `config/auth.json` : mot de passe d'accès

## 🔄 Reboot auto
Configurer le reboot à 5h du matin :

```bash
sudo crontab -e
```

Ajouter :
```
0 5 * * * /sbin/reboot
```