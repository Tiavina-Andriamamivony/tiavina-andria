# Le récit de mon alternance chez Numer

## Introduction

Je m'appelle **ANDRIAMAMIVONY Tiavintsoa Ulrich** et je suis en fin de parcours de licence à la **Haute École d'Informatique**, dans le parcours **Écosystème Logiciel**. J'ai choisi l'informatique car j'ai toujours aimé la science et tout ce qui touche à la technologie. Je voulais faire des études en physique ou en robotique au départ, mais je voulais m'insérer petit à petit dans cet univers en commençant par l'informatique. Je ne m'attendais pas à ce que cette filière puisse me passionner autant, la création et la résolution de problèmes étant les raisons principales. J'ai aussi eu la chance de faire ma première Numer.

L'alternance a commencé le **premier septembre 2025**. Je revenais tout juste de Tamatave pour les vacances de fin de L2.

## Prélude : l'examen TSINJO

Pour plus de contexte, voici un prélude.

On avait eu un examen en **PROG 4** qui portait sur la maîtrise de [[POJA]] (Postgres et Java), une plateforme qui permet (facilite) le déploiement d'un ***Spring Boot*** sur la plus grosse plateforme cloud connue à ce jour, ***Amazon Web Services***.

C'était le [[Docteur Fonenantsoa Maurica]] (directeur et co-fondateur de [[HEI]], génie et meilleur informaticien malgache) qui était le professeur titulaire du cours. En passant, il a grandement participé à l'implémentation de [[POJA]], avec *Onintsiky Ranaivoson*, *Mahefa Ny Anjara* et d'autres étudiants de la L3 sortante à ce moment-là (2 ans de plus de formation que moi, en L2 lors des faits).

On avait donc eu ce fameux examen. C'était le dernier examen de la L2, on devait créer une plateforme de donation avec **Java Spring Boot, Thymeleaf, Flyway pour l'UI, et Postgres Neon pour la BDD, le tout déployé sur POJA**. Cet examen semblait simple sans en connaître les détails, mais incroyablement compliqué face au stress. Cet examen, c'est [[TSINJO]]. Il était nécessaire d'utiliser une autre API du docteur pour pouvoir lire les transactions des élèves qui entrent dans le compte Orange Money de l'école : cette API, c'est [[VOLA]] (la combinaison d'un scrappeur codé en JavaScript et Puppeteer déployé sur une Lambda, et d'un exploiteur qui appelle ce scrappeur tous les jours via cron pour récupérer les transactions de la veille, et en même temps vérifier toutes les demandes de transaction qui ont un statut `PENDING`).

En gros, c'était ça.

On avait 4h pour le faire.

Personne n'a réussi. Je n'étais pas choqué, mais excité par le défi qui m'avait été donné. Il fallait comprendre le but de cet examen. Le Dr ne voulait pas seulement vérifier notre niveau de compétence sur l'infrastructure Cloud AWS, ni notre niveau technique sur Spring Boot, ni encore notre maîtrise des technologies IA à disposition pour évaluer notre niveau en vibe coding. Il voulait observer notre niveau sous pression, notre gestion du temps et du stress — enfin, je présume — car c'est dans ces moments qu'on est capable du meilleur comme du pire.

Pourquoi je pense cela ?

Le Docteur Fonenantsoa (qu'on appelle Lou) possédait une ESN basée en France ayant une filiale à Madagascar appelée [[Numer]]. Chaque année, il recrutait des alternants pour les former, les guider sur les meilleures pratiques du développement logiciel. Être recruté chez Numer, c'était comme être considéré comme la fine fleur de HEI, car Lou ne prenait que les personnes dont il estimait le potentiel. Cela marquait une ligne entre les étudiants lambda et ceux qui sortaient du lot. Cet examen était donc, je pense, un test — pas seulement sur POJA, mais sur la manière dont les futurs alternants allaient réagir.

J'ai eu **13.5/20** à cet examen.

## Le cadre de l'alternance

Il faut savoir que pour valider notre licence en informatique sur la branche Écosystème Logiciel (EL), il fallait trouver une alternance (6 mois minimum à 20h/semaine au 4ᵉ semestre), un stage (3 mois à 40h/semaine au 6ᵉ semestre), ou créer son entreprise dans la tech. Si aucune de ces options n'était prise, l'étudiant était assigné à un projet d'école.

J'ai mentionné qu'il y avait des entretiens chez Numer. Et bien évidemment, l'idée de finir mon alternance en avance et d'avoir plus de 4 mois de vacances au sixième semestre ne m'a pas déplu. J'ai postulé pour un projet dont le nom est ASA (une plateforme de suivi de performance en entreprise et de facturation), mais le poste a été pris par Titan, un de mes amis. Lou m'a donc mis sur Tsinjo et VOLA.

Quelle ironie, ce même examen qui m'en avait fait baver.

Je pense que c'est assez pour avoir le contexte en tête.

## Les premiers jours chez Numer

Mon premier jour, j'étais arrivé à 8h de peur de faire mauvaise impression. J'ai vu un autre nouvel alternant, qu'on appelle Tsanta.

Lou était encore hors de Madagascar et j'avais — j'ai — honnêtement peur de lui et de son opinion. On a attendu avec Tsanta pendant un long moment qui me semblait interminable, puis la chargée de communication, qui s'appelle Michou, est arrivée. Elle est aussi responsable de tenir le bureau de l'école. Ma première journée en tant qu'alternant chez Numer se résume à faire la connaissance de mes collègues, et à mon onboarding sur ASA (pour mes pointages et la génération de mes factures) et Mattermost (le canal de communication interne de Numer).

Le deuxième jour, Lou m'a donné pour mission d'embellir l'interface de Tsinjo et de rajouter une information dans les données affichées. Je regarde le code source. Ça m'a pris 2 semaines (il faut savoir qu'à la base je suis plutôt développeur frontend). La première chose que j'ai apprise est la capacité à intégrer / comprendre une codebase existante et la méthodologie de travail en entreprise (pipeline CI/CD, TDD avec coverage et Docker, clean code, code review, et un peu d'OPS).

Ensuite, Lou m'a fait prendre conscience de ma précipitation, de la manière dont je devais penser / réfléchir lors de la résolution de mes problèmes.

## Les missions intermédiaires

Ceci fini, d'autres petites missions m'ont été confiées :
- Aide sur une feature sur ASA
- Remise sur pied de VOLA après un down (causé par une migration Flyway de Lou)

La deuxième mission m'a permis de développer ma première feature sur VOLA, une feature vitale : **la synchronisation**. Je m'explique : quand VOLA est down, il ne peut pas appeler le scrappeur ; résultat, les paiements envoyés pendant ce down ne sont pas traités, et les jours où VOLA était HS ne sont pas pris en compte dans la vérification. La synchronisation permet de faire manuellement le processus en cron sur des jours spécifiques, et ainsi de résoudre les paiements en suspens.

Ceci fait, j'ai fait de la maintenance pendant un certain temps. Ça faisait 2 mois sur 6 que je travaillais et je m'inquiétais du sujet de ma soutenance : la synchronisation / la maintenance et un peu de communication, ce n'est pas glorieux.

## Le disaster recovery de VOLA

Cette feature de synchronisation, je l'ai développée en réponse à un vrai incident. Voici l'histoire complète.

### L'incident

Un jour, Lou (Dr Fonenantsoa) a mis en place une migration pour garantir l'unicité des données : une transaction ne peut appartenir qu'à une seule personne. Malheureusement, dans l'un de ses tests sur une des applications reliées à VOLA — des tests qui tournent en CI —, des couples e-mails + transactions incohérents ont été poussés en BDD.

On n'a trouvé la source du « down » que deux jours après la déclaration de l'incident.

### Le correctif immédiat

Une fois la source identifiée, on a :

- appliqué le correctif sur la migration,
- supprimé en base les mauvais paiements (les couples e-mails + transactions incohérents),
- refactoré les tests fautifs pour qu'ils ne repolluent plus la BDD.

Mais un problème de fond restait : les paiements envoyés pendant les deux jours de down ne pouvaient pas être résolus automatiquement. VOLA marche par cron journalier ; il récupère les transactions de la veille et vérifie les demandes `PENDING`. Si ce cron est raté un jour donné (parce que VOLA était HS), ce jour-là n'est jamais rattrapé, et il fallait tout vérifier manuellement, à la main, sur le compte Orange Money.

### La solution : le disaster recovery ([PR #7](https://github.com/hei-school/vola/pull/7))

Il fallait donc quelque chose pour rejouer le cron sur des dates précises — exactement celles où VOLA était down. J'ai écrit une feature de *recovery* qui réutilise la logique de vérification du cron, mais ciblée sur une date choisie.

Ce que la feature fait, pour une date donnée :

1. appelle le scrappeur, qui se connecte sur le compte Orange Money admin de Numer / HEI ;
2. récupère le fichier `.xls` du jour en question ;
3. fait un **upsert** en BDD (insère les transactions manquantes, met à jour les existantes) ;
4. déclenche la vérification des paiements correspondants.

C'est simple, mais son importance est capitale : sans ça, chaque down de VOLA laisse un trou de paiements non résolus qu'il faut traiter à la main.

**Techniquement :**

- `OrangeTransactionRecoveryService` — récupère les transactions Orange pour une date donnée, insère celles qui manquent, et relance la vérification via `PaymentVerificationRequestedService`.
- `OrangeRecoveryController` — expose l'endpoint `PUT /api/orange/recover?date=YYYY-MM-DD`. L'endpoint est **idempotent** : le rejouer sur la même date ne crée pas de doublons (c'est tout l'intérêt de l'upsert).
- `RecoveryResult` — modèle de retour qui remonte `nbSyncedTransactions` et `nbTotalTransactions`, pour savoir combien de transactions ont été rattrapées.

Un détail que j'ai appris lors des reviews : le succès du recovery ne doit pas dépendre du nombre d'insertions. Sur une date où toutes les transactions existent déjà en base, l'upsert n'insère rien — mais le recovery a bien réussi.

La PR (41 commits, ouverte le 24 décembre 2025, mergée le 6 janvier 2026) m'a aussi fait travailler le découpage d'un service en méthodes à responsabilité unique, les `try-catch` granulaires, et le logging des erreurs visible dans Sentry.

## La grande mission : intégrer VOLA dans HEI ADMIN

Lou m'a donc demandé de faire quelque chose de grand, de très grand. Faire en sorte que tous les frais de scolarité de HEI ADMIN passent par VOLA.

Tolojanahary était chargé de mon onboarding sur le projet. J'ai mis 5 mois à le faire.

Le problème ? La communication. J'étais habitué à travailler seul sur Tsinjo, donc c'est en partie ma faute. Mais chez HEI ADMIN aussi, ils ont de quoi se remettre en question. Tolojanahary me montre un service, une méthode et me dit : « Tu n'as qu'à mettre VOLA là. » Je lui demande confirmation, et c'est parti. (HEI admin est bizarre.)

### 1. Intégration de l'API via OpenAPI codegen

**Blocage :** impossibilité de modifier le fichier `build.gradle`.

HEI admin avait aussi un codegen automatique pour son client API, configuré sur POJA directement. Malheureusement, je ne pouvais pas faire la même chose pour VOLA. Pourquoi ?

Ce n'est pas supporté par POJA. Le mettre manuellement dedans alors ?

Non plus : lors des MAJ de POJA, les modifications dans `build.gradle` sont push-forcées par un bot, et donc cela signifiait remettre la commande à chaque MAJ de POJA, qui n'est pas déterministe.

**Solution :** ajouter manuellement les fichiers d'intégration de VOLA à HEI ADMIN, et exclure le dossier `psp/vola/api/gen/**` de l'analyse SonarQube via le `build.gradle` (le seul endroit où une modification a été acceptée).

```gradle
sonarqube {
    properties {
        property "sonar.exclusions", "**/psp/vola/api/gen/**"
    }
}
```

4 jours sur 5 de travail dessus.

### 2. La manière de faire

Comme je le disais, Tolojah m'a donné une méthode à update et un service à impacter pour l'intégration de VOLA (je sentais que l'envie de m'aider n'y était pas, mais ok).

En gros, je ne vais pas m'étaler : ça m'a pris 4 mois à faire.

C'est long. Pourquoi ?

Un manque de communication et un manque de compréhension de la part de l'équipe de HEI ADMIN. Je pense notamment au Dr Toky et à Manitra :

- Ils me donnent le mauvais endpoint à trigger.
- Ils ne comprennent pas que je ne dois pas modifier les fichiers codegen (je pense notamment au blocage qu'ils ont eu à cause de Sonar qui râlait sur ces mêmes fichiers).
- Ils ont mis en prod sans tester la feature elle-même, alors qu'il fallait au moins une semaine de test.
- Ils insistent sur l'utilisation d'un cron, alors que ce n'est pas nécessaire car VOLA en possède déjà un.

Mais Freddy m'a bien aidé dans la réalisation de cette feature.

J'ai aussi ma part de responsabilité : la période de dev a été longue aussi en partie à cause des code reviews avec Lou, longues parce que j'avais tant à apprendre. Mais ça, je ne le regrette pas.

### 3. Comment l'intégration de VOLA a été faite techniquement

**Vue d'ensemble du fonctionnement :**

Avant mon intégration, HEI ADMIN gérait les Mpbs (Mobile Payment Based Service = preuve de paiement Mobile Money) en local : l'étudiant déclarait son paiement, et il fallait qu'un admin vérifie manuellement sur l'application Orange Money que la transaction existait vraiment. Lent, source d'erreurs, et pas scalable pour toute la scolarité de HEI.

L'idée de l'intégration : déléguer entièrement la vérification à VOLA. VOLA scrape Orange Money tous les jours via son cron et connaît toutes les transactions réelles. HEI ADMIN n'a plus qu'à dire à VOLA « voici un paiement déclaré, vérifie-le » et plus tard demander « ce paiement a-t-il été retrouvé dans les transactions Orange Money ? ».

Concrètement, l'intégration s'est faite en 3 couches.

#### Couche 1 — Le client HTTP généré

À partir de la spec OpenAPI exposée par VOLA, j'ai généré un client Java (`PaymentControllerApi`, modèles `Payment`, `PspPayment`, etc.) que j'ai placé dans `psp/vola/api/gen/client/`. Ce code est intouchable (régénérable) et exclu de Sonar.

#### Couche 2 — L'adaptation au domaine HEI ADMIN

Le client généré parle le langage de VOLA, pas celui de HEI ADMIN. J'ai donc écrit trois classes pour faire le pont :

- `VolaPspConf` lit la config (URL + clé API) et expose un bean `VolaClient`.
- `VolaClient` wrappe le client généré et cache la clé API à chaque appel.
- `VolaMapper` traduit dans les deux sens : `MobileMoneyType ↔ PspType`, `VerificationStatusEnum ↔ MpbsStatus`, et `Payment` (VOLA) → `Mpbs` (HEI ADMIN).

#### Couche 3 — Le branchement dans le flux métier

Le `MpbsController` ne fait plus un simple `save()` en base. Quand un étudiant déclare un paiement (`POST /mpbs`), le `MpbsVerificationService` appelle `VolaClient.create(...)` pour pousser le paiement à VOLA et stocke le résultat. Plus tard, quand on veut connaître l'état d'un paiement, on appelle `VolaClient.get(...)` et le mapper reconstruit un `Mpbs` à jour.

#### Détails de la première grosse PR

Commit `1e61f6a` — *« feat: vola migration »*, 29 fichiers, +3 484 lignes.

- **Client généré** sous `psp/vola/api/gen/client/` à partir de la spec OpenAPI de VOLA : `PaymentControllerApi`, `PingControllerApi`, modèles `Payment`, `PspPayment`, `MobilePaymentType`, etc.
- **`VolaPspConf`** — `@Configuration` Spring qui lit `vola.api.url` et `vola.api.key` depuis `application.properties` et expose un bean `VolaClient`.

```java
@Configuration
public class VolaPspConf {
    @Value("${vola.api.url}")
    private String apiUrl;

    @Value("${vola.api.key}")
    private String apiKey;

    @Bean
    public VolaClient volaClient() {
        ApiClient apiClient = new ApiClient();
        apiClient.setBasePath(apiUrl);
        return new VolaClient(new PaymentControllerApi(apiClient), apiKey);
    }
}
```

- **`VolaClient`** — wrapper autour du `PaymentControllerApi` généré, expose `create(...)` et `get(...)` indexés par `pspType`, `pspId` et email.

```java
@AllArgsConstructor
public class VolaClient {
    private final PaymentControllerApi paymentApi;
    private final String apiKey;

    public Payment create(PspType pspType, String pspId, String email, PaymentInfo info) {
        return paymentApi.createPayment(apiKey, pspType, pspId, email, info);
    }

    public Payment get(PspType pspType, String pspId, String email) {
        return paymentApi.getPayment(apiKey, pspType, pspId, email);
    }
}
```

- **`VolaMapper`** — traduit entre les modèles VOLA et le domaine HEI ADMIN :
  - `MobileMoneyType` ↔ `PspType` (seul `ORANGE_MONEY` est supporté, sinon `UnsupportedPspTypeException`).
  - `Payment.VerificationStatusEnum` → `MpbsStatus` : `VERIFYING → PENDING`, `SUCCEEDED → SUCCESS`, `FAILED → FAILED`.
  - Reconstruit un `Mpbs` à partir d'un `Payment` VOLA (`creationInstant`, `lastPspVerificationInstant`, `amount`, `pspId`...).

```java
public PspType toPspType(MobileMoneyType type) {
    return switch (type) {
        case ORANGE_MONEY -> PspType.ORANGE_MONEY;
        default -> throw new UnsupportedPspTypeException(type);
    };
}

public MpbsStatus toMpbsStatus(Payment.VerificationStatusEnum status) {
    return switch (status) {
        case VERIFYING -> PENDING;
        case SUCCEEDED -> SUCCESS;
        case FAILED -> FAILED;
    };
}

public Mpbs toMpbs(Payment payment) {
    PspPayment psp = payment.getPspPayment();
    Mpbs mpbs = new Mpbs()
        .creationDatetime(payment.getCreationInstant())
        .lastVerificationDatetime(payment.getLastPspVerificationInstant())
        .amount(psp.getAmount())
        .pspId(psp.getPspId())
        .mobileMoneyType(toMobilePaymentType(psp.getPspType()));

    if (payment.getVerificationStatus() == SUCCEEDED) {
        mpbs.successfullyVerifiedOn(payment.getLastPspVerificationInstant());
        mpbs.pspOwnDatetimeVerification(payment.getLastPspVerificationInstant());
    }
    return mpbs;
}
```

- **`MpbsController` + `MpbsVerificationService`** — l'enregistrement d'un Mpbs déclenche désormais une demande de vérification à VOLA via `sendVolaVerificationRequestAndSaveResult(...)` au lieu d'un simple persist en base.

**Configuration (`application.properties`) :**

```properties
vola.api.url=${VOLA_API_URL}
vola.api.key=${VOLA_API_KEY}
```

**Flux côté utilisateur (version initiale) :**

- L'étudiant entre son frais → `POST /mpbs` enregistre le paiement et demande une vérification à VOLA.
- Il consulte la liste de ses frais → `GET /mpbs` demande à VOLA si le Mpbs a bien été vérifié.

### 4. Le déplacement du point de vérification (PR #1214)

Après la mise en prod, on s'est rendu compte que vérifier les Mpbs au niveau du `GET /mpbs` (par `feeId`) était trop tardif et trop fragmenté : il fallait appeler VOLA fee par fee, et la liste des frais d'un étudiant n'était jamais cohérente avec l'état réel des paiements.

PR #1214 — *« chore: change vola verification endpoint target »* (4 fichiers Java, mergée dans `preprod` le 10 avril 2026) a déplacé le trigger plus en amont :

- Ajout d'une méthode `findAllByStatusAndStudentId(MpbsStatus, String)` dans `MpbsRepository`.

```java
public interface MpbsRepository extends JpaRepository<Mpbs, String> {
    List<Mpbs> findAllByStatusAndStudentId(MpbsStatus status, String studentId);
}
```

- Remplacement de l'ancien `findAllWithPaymentResolution(studentId, feeId)` (vérification fee par fee) par un seul `verifyPendingMpbsForStudent(studentId)` qui récupère tous les Mpbs `PENDING` de l'étudiant et les vérifie en un lot via VOLA.

```java
public void verifyPendingMpbsForStudent(String studentId) {
    List<Mpbs> pendingMpbs = mpbsRepository.findAllByStatusAndStudentId(PENDING, studentId);
    pendingMpbs.forEach(this::verifyMpbsFromVola);
}
```

- Injection de `MpbsVerificationService` dans `FeeController` : `getFeesByStudentId(...)` appelle maintenant `verifyPendingMpbsForStudent(...)` **avant** de retourner les frais — comme ça, les frais retournés reflètent l'état réel côté VOLA.

```java
@GetMapping("/students/{studentId}/fees")
public List<Fee> getFeesByStudentId(@PathVariable String studentId, ...) {
    // Verify pending mpbs before fetching fees so results reflect current vola state.
    // Orchestrated here to avoid circular dependency (MpbsService -> FeeService).
    mpbsVerificationService.verifyPendingMpbsForStudent(studentId);
    return feeService.getFeesByStudentId(studentId, ...);
}
```

- Cette orchestration est faite dans `FeeController` (et non dans `MpbsService`) pour éviter une dépendance circulaire `MpbsService → FeeService`.

**Résultat :** la vérification VOLA est passée de *par-fee, déclenchée au listing des Mpbs* à *par-étudiant, déclenchée au listing des frais*. C'est plus cohérent, moins d'appels redondants à VOLA, et l'utilisateur voit toujours un état à jour.

## Conclusion

Cette alternance m'a appris à travailler en suivant les normes d'une entreprise, les aptitudes sociales qu'il faut pour s'intégrer dans une entreprise, et avant tout à m'adapter et à réagir selon le contexte / la situation.
