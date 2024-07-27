## DB設計 | トピッククラスター

### ER図
```mermaid
erDiagram
  pillar_content ||--o{ cluster1   : ""
  pillar_content ||--o{ cluster2   : ""
  pillar_content ||--o{ cluster3   : ""
  pillar_content ||--o{ cluster4   : ""
	cluster1 ||--o| article1 : "1:1"
	cluster2 ||--o| article2 : "1:1"
	cluster3 ||--o| article3 : "1:1"
	cluster4 ||--o| article4 : "1:1"

  pillar_content {
      int id PK "ピラーコンテンツID"
  }

  cluster1 {
      int id PK "クラスタID"
  }
  cluster2 {
      int id PK "クラスタID"
  }
  cluster3 {
      int id PK "クラスタID"
  }
  cluster4 {
      int id PK "クラスタID"
  }

  article1 {
      int id PK "記事ID"
  }
  article2 {
      int id PK "記事ID"
  }
  article3 {
      int id PK "記事ID"
  }
  article4 {
      int id PK "記事ID"
  }
```

### 詳細定義
**pillar_content**
| name | type | null | key | default | description |
| ---- | ---- | ---- | ---- | ---- | ---- |
| id | int | × | PK | - | autoIncrement |
|  |  |  |  |  |  |
|  |  |  |  |  |  |
|  |  |  |  |  |  |
