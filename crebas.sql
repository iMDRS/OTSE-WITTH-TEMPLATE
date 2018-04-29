/*==============================================================*/
/* Nom de SGBD :  Sybase SQL Anywhere 11                        */
/* Date de création :  26/04/2018 17:29:26                      */
/*==============================================================*/


/*==============================================================*/
/* Table : ABSENCE                                              */
/*==============================================================*/
create table ABSENCE 
(
   IDABS                integer                        not null,
   IDMATIERE            integer                        not null,
   N_APPOGE             integer                        not null,
   DATEABS              date                           null,
   HEUREDEBUTABS        time                           null,
   HEUREFINABS          time                           null,
   ETAT__               smallint                       null,
   JUSTIFICATON         long varchar                   null,
   constraint PK_ABSENCE primary key (IDABS)
);

/*==============================================================*/
/* Table : ACTUALITE                                            */
/*==============================================================*/
create table ACTUALITE 
(
   IDACTL               integer                        not null,
   IDRESP               integer                        null,
   IDENSG               integer                        null,
   TYPEACT              long varchar                   null,
   OBJET                long varchar                   null,
   CONTENU              long varchar                   null,
   constraint PK_ACTUALITE primary key (IDACTL)
);

/*==============================================================*/
/* Table : DEPARTEMENT                                          */
/*==============================================================*/
create table DEPARTEMENT 
(
   IDDEPT               integer                           not null,
   NOMDEPT              long varchar                      null,
   CHEFDEPT             long varchar                      null,
   constraint PK_DEPARTEMENT primary key (IDDEPT)
);

/*==============================================================*/
/* Table : DIPLOME                                              */
/*==============================================================*/
create table DIPLOME 
(
   IDDPL                integer                         not null,
   IDDEPT               integer                         not null,
   NOMDPL               long varchar                    null,
   TYPEDPL              long varchar                    null,
   constraint PK_DIPLOME primary key (IDDPL)
);

/*==============================================================*/
/* Table : DOCUMENT                                             */
/*==============================================================*/
create table DOCUMENT 
(
   IDDOC                integer                        not null,
   N_APPOGE             integer                        not null,
   IDRESP               integer                        not null,
   TYPEDOC              long varchar                   null,
   DATEDEMANDE          date                           null,
   HEUREDEMANDE         time                           null,
   STATUS               time                           null,
   JUSTIFICATION        long varchar                   null,
   constraint PK_DOCUMENT primary key (IDDOC)
);

/*==============================================================*/
/* Table : ENSEIGNANT                                           */
/*==============================================================*/
create table ENSEIGNANT 
(
   IDENSG               integer                        not null,
   NOMENSG              long varchar                   null,
   PRENOMENSG           long varchar                   null,
   ADRESSE              long varchar                   null,
   EMAIL                long varchar                   null,
   TEL                  integer                        null,
   constraint PK_ENSEIGNANT primary key (IDENSG)
);

/*==============================================================*/
/* Table : ETAPE                                                */
/*==============================================================*/
create table ETAPE 
(
   IDETP                integer                         not null,
   IDDPL                integer                         not null,
   NIVEAU               long varchar                    null,
   constraint PK_ETAPE primary key (IDETP)
);

/*==============================================================*/
/* Table : ETUDIANT                                             */
/*==============================================================*/
create table ETUDIANT 
(
   N_APPOGE             integer                        not null,
   CNE                  integer                        null,
   CNI                  long varchar                   null,
   NOMFRC               long varchar                   null,
   PRENOMFRC            long varchar                   null,
   NOMARB               long varchar                   null,
   PRENOMARB            long varchar                   null,
   ADRESSE              long varchar                   null,
   EMAIL                long varchar                   null,
   TEL                  integer                        null,
   DATENAISSANCE        date                           null,
   LIEUNAISSANCE        long varchar                   null,
   constraint PK_ETUDIANT primary key (N_APPOGE)
);

/*==============================================================*/
/* Table : EXAMS                                                */
/*==============================================================*/
create table EXAMS 
(
   IDEXAM               integer                        not null,
   IDENSG               integer                        null,
   DATEEXAM             date                           null,
   HEUREDEBUTEXAM       time                           null,
   HEUREFINEXAM         time                           null,
   TYPEEXAM             long varchar                   null,
   STATUS               long varchar                   null,
   constraint PK_EXAMS primary key (IDEXAM)
);

/*==============================================================*/
/* Table : MATIERE                                              */
/*==============================================================*/
create table MATIERE 
(
   IDMATIERE            integer                        not null,
   IDMODULE             integer                        not null,
   NOMMATIERE           long varchar                   null,
   constraint PK_MATIERE primary key (IDMATIERE)
);

/*==============================================================*/
/* Table : MODULE                                               */
/*==============================================================*/
create table MODULE 
(
   IDMODULE             integer                        not null,
   IDSEMESTRE           integer                        not null,
   NOMMODULE            long varchar                   null,
   constraint PK_MODULE primary key (IDMODULE)
);

/*==============================================================*/
/* Table : NOTE                                                 */
/*==============================================================*/
create table NOTE 
(
   IDNOTE               integer                        not null,
   IDMATIERE            integer                        not null,
   N_APPOGE             integer                        not null,
   NOTE                 float                          null,
   TYPENOTE             long varchar                   null,
   constraint PK_NOTE primary key (IDNOTE)
);

/*==============================================================*/
/* Table : RECLAMATION                                          */
/*==============================================================*/
create table RECLAMATION 
(
   IDRECL               integer                        not null,
   N_APPOGE             integer                        null,
   LIEURECL             long varchar                   null,
   AVANTCHANG           long varchar                   null,
   APRESCHANG           long varchar                   null,
   constraint PK_RECLAMATION primary key (IDRECL)
);

/*==============================================================*/
/* Table : RESPONSABLE                                          */
/*==============================================================*/
create table RESPONSABLE 
(
   IDRESP               integer                        not null,
   NOMRESP              long varchar                   null,
   PRENOMRESP           long varchar                   null,
   ADRESSE              long varchar                   null,
   EMAIL                long varchar                   null,
   TEL                  integer                        null,
   constraint PK_RESPONSABLE primary key (IDRESP)
);

/*==============================================================*/
/* Table : SEMESTRE                                             */
/*==============================================================*/
create table SEMESTRE 
(
   IDSEMESTRE           integer                        not null,
   IDETP                integer                        not null,
   TYPESEMESTRE         long varchar                   null,
   constraint PK_SEMESTRE primary key (IDSEMESTRE)
);

/*==============================================================*/
/* Table : UTILISATEUR                                          */
/*==============================================================*/
create table UTILISATEUR 
(
   "LOGIN"              long varchar                   not null,
   MOTPASSE             long varchar                   null,
   ROLE                 long varchar                   null,
   constraint PK_UTILISATEUR primary key ("LOGIN")
);

alter table ABSENCE
   add constraint FK_ABSENCE_AVOIR1_ETUDIANT foreign key (N_APPOGE)
      references ETUDIANT (N_APPOGE)
      on update restrict
      on delete restrict;

alter table ABSENCE
   add constraint FK_ABSENCE_CONCEME_MATIERE foreign key (IDMATIERE)
      references MATIERE (IDMATIERE)
      on update restrict
      on delete restrict;

alter table ACTUALITE
   add constraint FK_ACTUALIT_PUBLIER_RESPONSA foreign key (IDRESP)
      references RESPONSABLE (IDRESP)
      on update restrict
      on delete restrict;

alter table ACTUALITE
   add constraint FK_ACTUALIT_PUBLIER2_ENSEIGNA foreign key (IDENSG)
      references ENSEIGNANT (IDENSG)
      on update restrict
      on delete restrict;

alter table DIPLOME
   add constraint FK_DIPLOME_APPARTENI_DEPARTEM foreign key (IDDEPT)
      references DEPARTEMENT (IDDEPT)
      on update restrict
      on delete restrict;

alter table DOCUMENT
   add constraint FK_DOCUMENT_DEMANDER1_ETUDIANT foreign key (N_APPOGE)
      references ETUDIANT (N_APPOGE)
      on update restrict
      on delete restrict;

alter table DOCUMENT
   add constraint FK_DOCUMENT_TRAITER_RESPONSA foreign key (IDRESP)
      references RESPONSABLE (IDRESP)
      on update restrict
      on delete restrict;

alter table ETAPE
   add constraint FK_ETAPE_APPARTENI_DIPLOME foreign key (IDDPL)
      references DIPLOME (IDDPL)
      on update restrict
      on delete restrict;

alter table EXAMS
   add constraint FK_EXAMS_ENVOYER_ENSEIGNA foreign key (IDENSG)
      references ENSEIGNANT (IDENSG)
      on update restrict
      on delete restrict;

alter table MATIERE
   add constraint FK_MATIERE_CONTENIR1_MODULE foreign key (IDMODULE)
      references MODULE (IDMODULE)
      on update restrict
      on delete restrict;

alter table MODULE
   add constraint FK_MODULE_CONTENIR_SEMESTRE foreign key (IDSEMESTRE)
      references SEMESTRE (IDSEMESTRE)
      on update restrict
      on delete restrict;

alter table NOTE
   add constraint FK_NOTE_AVOIR_MATIERE foreign key (IDMATIERE)
      references MATIERE (IDMATIERE)
      on update restrict
      on delete restrict;

alter table NOTE
   add constraint FK_NOTE_OBTENIR_ETUDIANT foreign key (N_APPOGE)
      references ETUDIANT (N_APPOGE)
      on update restrict
      on delete restrict;

alter table RECLAMATION
   add constraint FK_RECLAMAT_FAIRE1_ETUDIANT foreign key (N_APPOGE)
      references ETUDIANT (N_APPOGE)
      on update restrict
      on delete restrict;

alter table SEMESTRE
   add constraint FK_SEMESTRE_APPARTENI_ETAPE foreign key (IDETP)
      references ETAPE (IDETP)
      on update restrict
      on delete restrict;

