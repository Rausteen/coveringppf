import Link from "next/link";
import { siteConfig, buildWhatsAppUrl } from "@/config/site";
import type { FAQItem } from "@/components/FAQ";

const wa = buildWhatsAppUrl();

export const HOME_FAQ: FAQItem[] = [
  {
    q: "Qu’est-ce que le PPF (film de protection carrosserie) ?",
    a: (
      <>
        Le PPF (Paint Protection Film) est un film polyuréthane transparent qui se pose sur la peinture du véhicule. Il protège la carrosserie contre les gravillons, les micro-rayures, les insectes et les frottements du quotidien — sans modifier l’aspect d’origine de la voiture.
      </>
    ),
  },
  {
    q: "Quelle est la différence entre PPF et covering ?",
    a: (
      <>
        Le <strong>PPF</strong> est <strong>transparent</strong> et a pour rôle principal de <strong>protéger</strong> la peinture. Le <strong>covering</strong> est un film coloré ou texturé qui sert à <strong>changer l’apparence</strong> du véhicule (couleur, finition mate, satin, carbone…). Le PPF préserve, le covering transforme.
      </>
    ),
  },
  {
    q: "Le PPF change-t-il l’apparence de la voiture ?",
    a: (
      <>
        Non, le PPF est conçu pour rester invisible. Bien posé, il conserve l’aspect d’origine de la peinture. Certains films apportent un effet auto-cicatrisant ou un léger éclat (gloss).
      </>
    ),
  },
  {
    q: "Peut-on poser du PPF seulement sur certaines zones ?",
    a: (
      <>
        Oui. La pose partielle est très demandée : face avant, capot, pare-chocs, rétroviseurs, bas de caisse, montants. Vous protégez les zones les plus exposées sans poser un kit complet.
      </>
    ),
  },
  {
    q: "Le PPF protège-t-il vraiment des gravillons ?",
    a: (
      <>
        Oui, c’est même son usage principal. Le film absorbe l’impact des projections de gravillons et limite fortement les éclats de peinture, surtout sur les zones avant exposées (autoroutes A4, A35).
      </>
    ),
  },
  {
    q: `Combien coûte une pose de PPF à ${siteConfig.city} ?`,
    a: (
      <>
        Le tarif dépend du véhicule, des zones à protéger et du film choisi. Le plus simple est de nous envoyer le modèle et quelques photos sur <Link className="text-accent hover:underline" href={wa} target="_blank" rel="noopener">WhatsApp</Link> pour recevoir un devis adapté.
      </>
    ),
  },
  {
    q: `Combien coûte un covering voiture à ${siteConfig.city} ?`,
    a: (
      <>
        Un covering dépend de la taille du véhicule, du film (mat, satin, brillant, carbone…) et du niveau de finition souhaité (total ou partiel). Envoyez-nous votre véhicule sur WhatsApp pour un devis transparent.
      </>
    ),
  },
  {
    q: "Le covering abîme-t-il la peinture ?",
    a: (
      <>
        Non, à condition que la peinture d’origine soit en bon état au moment de la pose. Le film vinyle protège même légèrement la carrosserie. Une dépose mal réalisée — ou sur une peinture déjà fragilisée — peut en revanche poser problème, d’où l’importance d’un poseur soigneux.
      </>
    ),
  },
  {
    q: "Peut-on retirer un covering ?",
    a: (
      <>
        Oui. Le covering est <strong>réversible</strong>. La dépose se fait à chaud, par un professionnel, pour préserver la peinture sous-jacente.
      </>
    ),
  },
  {
    q: "Quelle finition choisir : mat, satin, brillant, carbone ?",
    a: (
      <>
        Mat pour un look agressif, satin pour un rendu élégant et discret, brillant pour un effet « peinture neuve », carbone pour des pièces sportives ciblées. On vous oriente selon votre véhicule et votre objectif.
      </>
    ),
  },
  {
    q: "Covering total ou covering partiel : que choisir ?",
    a: (
      <>
        Le covering total transforme l’ensemble du véhicule. Le partiel cible un élément (toit, capot, rétros, bandes sportives) pour un effet fort sans engager le budget d’un covering complet.
      </>
    ),
  },
  {
    q: "Le marquage publicitaire est-il adapté aux artisans ?",
    a: (
      <>
        Oui, c’est même l’un des supports publicitaires les plus rentables sur le long terme. Votre véhicule devient une enseigne mobile, visible chaque jour sur les routes de {siteConfig.city} et de l’{siteConfig.region}.
      </>
    ),
  },
  {
    q: "Peut-on faire un marquage sur un utilitaire ?",
    a: (
      <>
        Bien sûr. Kangoo, Trafic, Master, Jumpy, Boxer, Sprinter, Ducato — tous les utilitaires se prêtent au marquage publicitaire, partiel ou total (covering + marquage).
      </>
    ),
  },
  {
    q: "Faut-il fournir le logo et la charte graphique ?",
    a: (
      <>
        Idéalement oui (logo en vectoriel, couleurs, polices). Si vous n’avez pas de fichiers exploitables, parlons-en — nous pouvons retravailler les éléments ou orienter vers un graphiste.
      </>
    ),
  },
  {
    q: "Comment obtenir un devis rapidement ?",
    a: (
      <>
        Le plus rapide&nbsp;: <Link className="text-accent hover:underline" href={wa} target="_blank" rel="noopener">écrire sur WhatsApp</Link>. Indiquez le véhicule, la prestation envisagée, et joignez quelques photos. Nous revenons vers vous avec une proposition adaptée.
      </>
    ),
  },
  {
    q: `Travaillez-vous autour de ${siteConfig.city} ?`,
    a: (
      <>
        Oui — nous intervenons sur {siteConfig.serviceAreas.slice(0, 8).join(", ")} et plus largement en {siteConfig.region} / {siteConfig.department}.
      </>
    ),
  },
];
