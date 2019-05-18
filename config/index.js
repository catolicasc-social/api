module.exports = {
  EXPRESS_CONFIG: {
      PORT: process.env.PORT,
  },
  FIREBASE_PRODUCAO: {
      "type": "service_account",
      "project_id": "comida-catolica",
      "private_key_id": "ded69802fd389e108e705bbd38a853826fd517ef",
      "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDEYH34Hqv/DTNS\nzOxpHdRv2+CEcxjlsA9p36L9emUYMzE/HnZlktNMzPttXiHbV2vwsZzB6zLDx1hk\nXfzhdqfyUOLrkdXHINeEOYoNr1NvZpkXrX3kL0FTwAxtrRh1NVBxEhgPOJOXUA3X\nPgNZtj31vMcxDGZEx3p7jo+vhuS1YP/s8WOsabZqlUU5/wBRZxa8deduFFNHwJ2D\nTjvqs7szrrE9RL9Kqqw8vacFeM5Vu1GNKOi8/+L9l6MemUggRPOdcvg1MLJ6tH+z\n7LUSPNzDZ7Bgabs++dH1OZS4z9B5e4fM9n0sA2wX52rt0IHyoGV2LhAL3TUJWaoL\nwDRA40RhAgMBAAECggEAOEgrclRgGS5QWlfPHeVlwFV1SKCwLwxBrqdg0GMm3EO3\nxo5VgpENLELHgLXs4C9zCT3uXompOAFHLSTe2EOoqMNT9g4LBhI8knHnRjrMn+34\nzJd1sFN21qkBJuHoU5dfIbj82kftzP0tqlXkoe6gXXCoaj9ShD3jtcvLFJSFshHE\nyZH1ohVpcBFJ/jbdJOV5vYV44yaiTTPuZxoNVchBZfxUsDpv5GSRTkGeeEM6yswA\nzeeSbO6TSbvImgoG3DpjR4t2aQv/JeMudim0cjUfwhoKuLUCQvzlJAIhXmY8eAtb\nrGhUdMTyKbz8fv39Z9EDGzVt53+IFkI7Ppo2R4To7QKBgQD22yvLH3paTp8xN5jk\ng7r59vg7W7hfTqvfLV/7pIpimlvBve/EdAc9HOYU2ss9+O6/Q0eJXXuJ1/pbUiCt\njkI6zucrVFpVSnePpSBrwqg3Vp4mC496JKJ24J0W1x99un73xzH7NLszwaWDDc4h\nXXutGQ1gd9TCGOrYa3jqj+BqawKBgQDLpqYOCO8l9Atrv4yC3y11t3MlDQlhWccv\nLC2DNcVfVBqtlAiBAg4kcB60zO0B/W/3KR+46TpWf6YbkutgvNEon3XRGK9TsLsk\nBZUQyoluAUShH4ZMR2zLAYpHHJYoHBBQuyWa4QiV6B3d2Bj/Hyz+hk7qQOpR9YMl\noEI0qj+XYwKBgQCitmixZLhDWlt4F4uB5IqURQPuLFDlEXgcjU4dEqHcyJ3+oHGw\nbkJvN+M4j9czrCfCjlhS5PmPLHtrQkEj5QcmuEaLuvgoDAOu/UrXfOFgSInJzgju\nm8My1G73JSkuuIUEUZpSWLmkLdoo/iqGt5XTzRWSJqponf/+UyjKg7eKrQKBgBaM\nJOZ45sF0+666TnxO6WGXJhB8GQXGQt9eLMvSMEAVt75wHWDrMVWndD7gUX1e6f6b\ndv+qEuNwzptO8PCM9ztgLFMyQHcrogyi8ZYiVoTvbwHH076uScVQLlchOx7FvKiz\nj75OG/087dGaE2prsTec9y/IcCkS3apUy/+4ucGxAoGBALo/iPeC6gp67UChkpTK\nPkdSXQZg4NyYCBEUEWgWjgT8Cg3hWgKxaoMumtccE0x4rsiM+mSwq4bmvNSA++E1\nJq0U/uTtVZuRFWjroGggCeN80SA/tEQP9W0nR2JVCRiGSeBdcBJpSGqYowM1wy6c\nBiu3RJZ8pEjX62xehoHs4SV8\n-----END PRIVATE KEY-----\n",
      "client_email": "firebase-adminsdk-ecos8@comida-catolica.iam.gserviceaccount.com",
      "client_id": "109149780443508678186",
      "auth_uri": "https://accounts.google.com/o/oauth2/auth",
      "token_uri": "https://oauth2.googleapis.com/token",
      "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
      "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-ecos8%40comida-catolica.iam.gserviceaccount.com"
    },
  FIREBASE_DESENVOLVIMENTO: {
      "type": "service_account",
      "project_id": "comida-dev",
      "private_key_id": "01a95f8da2804777e2dd649c5f5a60e61e87b63f",
      "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQDTM7gG3idXxN0x\n6eEtoXP5oF6F7QB4dajVSbtYpHMk5iiyvUPEWM5d9iVLlZQTEP64Hyg7kHbBlSOc\nDZVVVRYr3ST9AMNavs0iMbRttfoxChwSyT0w8n4ucQq+MQhDWazq/sAMCq7JXvH5\nfnU7vTfWjASyqH6thgiI7TftDZe8A14vYOlTuQMPTrVwXcahvDmLNuX4oCnHIoMG\nz4998LGzJIewZAXydWrgX3y+4wD5H/jiQiKRUFFhyIBMwZTjWhAGagP4R4bJByRJ\ncNcrJat+OMh3CzPoI1qgeuyMfQp1Rml+oIRUgf9d8LshipeNonQpGadq9GVCDpqd\nu+xbXTg5AgMBAAECggEAAIsxw5IFAEu5ISx1sLoE45hPcwPyDJmvScQyjKBhEkey\nlPCIq5CdR1aiUvXXVEV+dxGrWfQw9v3OFHil8C4F571GhF3bkm/ipH9UVTiS8z2c\n8ZbWbT3XCO+6+u2ykqQokXEjYmQYRzrhuVMWkeBo0um9z7nobGGj9nwNdWKRhgNv\nbvl8Q/HWnBOrGYGFS9NCCMNAX3EZT/CTxUi9GCA/XgTkugJeKY4UTIsrS89JZ3n8\n7JI30DKLHTU20SNS1M1NZemOoRjL7xQ8JYrGZ62hcBBoRoZaERTNvql9MHiDoRkQ\n73QnxhT0aZ6RKPYQPsUJD2SC5XoPhdn6yoGDNSuuwQKBgQD8hj9vGMiv+7XnxbQK\nYofY8R4jAHvB3h3NW/BsbOF1kKfNbUghXXmz+Hi8K/y0nECLtRyMOF1jOz2qavvx\nIrGKltAP1/AvAYsiDPQK7v0oQOP/ClgZAKEMnfpfnqVj0bmJz3XOzJW8tQgnNtwn\nn4g6RpGwymogkO/bUNUHxKVm4QKBgQDWG9/hbPMabQ2SvLLmoQJ0cnlFyr4BC0rs\nQxBUghxC6mVmeIw/kDSmeTV+YEUIPOQxtMtEUzoup8BTZvuw75xkxSs298eABkLM\n34rC5hAU5aDUc7w7h7cRKf+ApVUDCNjv7rZQCFRVYiheLvIZTq+c2Icc72VuXdaq\nXKpgJ470WQKBgHKYxb64A5MBaqqUqMCxuC52NZPyyzbOgr3IBFJgEuzUSaJK/pnN\nnsZScxAJ8jNQWWZNOXhUt+SpZLGqvUzPzrwy9pbKCwB59dbtA+7WR+J1mEIMQrCN\n/YgJRS8RgsLK0SU+FZtUcnthuCJ7nesJVbwEfGc7ZHAE9iSUCSjuT5VhAoGAGbiV\nh54wAi+xnrwefcg/5D9QREsb0kJKCOHxl0VeIcfI0KuQpZ4sRQdwnrLv+BJgk3wV\noyqgZbRvTVWkzNesIQryqxLPG5kk8zmzkMBUlD4VuRACP+CI5H34HLs/4DJy5Tf3\nHNwzTWKSWOYo3VNvk1cLvDUiKUUKocKqEQ0PhlkCgYBfoqFzALgdufRMj/gNKIi5\nzEO+0FykN4MSpjNS0ak6zbjzseVpRrLLCYwndoS/TWakrzSH2l10XOaR5nTBTNL0\nB/yxCyBQhUq61iJK8NVVhnDn5zrqzg2DiDGYAVNbCIge67JlI5l8azgLNVD/rZof\nEy72cptYWwcViEjK2xuJSg==\n-----END PRIVATE KEY-----\n",
      "client_email": "firebase-adminsdk-wwhhd@comida-dev.iam.gserviceaccount.com",
      "client_id": "115581225332315428751",
      "auth_uri": "https://accounts.google.com/o/oauth2/auth",
      "token_uri": "https://oauth2.googleapis.com/token",
      "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
      "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-wwhhd%40comida-dev.iam.gserviceaccount.com"
    }
};

module.exports.firebase = module.exports["FIREBASE_" + process.env.BANCO];