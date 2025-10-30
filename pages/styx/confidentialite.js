import { NextSeo } from "next-seo";
import Head from "next/head";
import { motion } from "framer-motion";
import clsx from "clsx";

const ContentWrapper = ({ children, className, width }) => (
  <div
    style={{ maxWidth: `${width || "100%"}` }}
    className={clsx("w-full px-5 mx-auto relative", className)}
  >
    {children}
  </div>
);

export default function StyxConfidentialite() {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="googlebot" content="noindex, nofollow" />
      </Head>
      <NextSeo
        title="Styx - Politique de Confidentialité"
        description="Politique de Confidentialité de l'application Styx"
        noindex={true}
        nofollow={true}
      />

      <div className="pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.35, delay: 0.2 },
          }}
        >
          <ContentWrapper width="720px" className="mt-10 md:mt-20">
            <h1 className="mb-6 text-3xl font-black md:text-4xl dark:text-white">
              Styx - Politique de Confidentialité
            </h1>

            <div className="post-content prose dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                Dernière mise à jour :{" "}
                {new Date().toLocaleDateString("fr-FR", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 dark:text-white">
                  1. Introduction
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Bienvenue sur Styx ("nous", "notre", "nos"). Nous nous
                  engageons à protéger votre vie privée et vos informations
                  personnelles. Cette Politique de Confidentialité explique
                  comment nous collectons, utilisons, divulguons et protégeons
                  vos informations lorsque vous utilisez notre application
                  mobile.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Veuillez lire attentivement cette politique de
                  confidentialité. Si vous n'acceptez pas les termes de cette
                  politique de confidentialité, veuillez ne pas accéder à
                  l'application.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 dark:text-white">
                  2. Informations que Nous Collectons
                </h2>

                <h3 className="text-xl font-semibold mb-3 dark:text-white">
                  2.1 Informations Personnelles
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Nous pouvons collecter des informations personnelles que vous
                  nous fournissez volontairement lorsque vous :
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300">
                  <li>Créez un compte</li>
                  <li>Utilisez l'application</li>
                  <li>Nous contactez pour obtenir de l'aide</li>
                  <li>Participez à des enquêtes ou promotions</li>
                </ul>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Ces informations peuvent inclure :
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300">
                  <li>Nom</li>
                  <li>Adresse email</li>
                  <li>Nom d'utilisateur</li>
                  <li>Informations de profil</li>
                  <li>Toute autre information que vous choisissez de fournir</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 dark:text-white">
                  2.2 Informations Collectées Automatiquement
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Lorsque vous utilisez notre application, nous pouvons
                  collecter automatiquement certaines informations, notamment :
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300">
                  <li>
                    Informations sur l'appareil (modèle, système d'exploitation,
                    identifiants uniques)
                  </li>
                  <li>
                    Données d'utilisation (fonctionnalités consultées, temps
                    passé, interactions)
                  </li>
                  <li>
                    Données de journal (adresse IP, heures d'accès, journaux
                    d'erreurs)
                  </li>
                  <li>Données de localisation (si vous accordez l'autorisation)</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 dark:text-white">
                  2.3 Données de Tiers
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Nous pouvons recevoir des informations vous concernant de
                  sources tierces, telles que les plateformes de réseaux sociaux
                  si vous choisissez de lier votre compte.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 dark:text-white">
                  3. Comment Nous Utilisons Vos Informations
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Nous utilisons les informations que nous collectons pour :
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300">
                  <li>Fournir, exploiter et maintenir notre application</li>
                  <li>Améliorer, personnaliser et étendre nos services</li>
                  <li>
                    Comprendre et analyser comment vous utilisez notre
                    application
                  </li>
                  <li>
                    Développer de nouveaux produits, services, fonctionnalités
                    et capacités
                  </li>
                  <li>
                    Communiquer avec vous pour le service client, les mises à
                    jour et les promotions
                  </li>
                  <li>Traiter vos transactions</li>
                  <li>
                    Vous envoyer des notifications push (si vous avez accepté)
                  </li>
                  <li>Détecter et prévenir la fraude</li>
                  <li>Respecter les obligations légales</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 dark:text-white">
                  4. Comment Nous Partageons Vos Informations
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Nous pouvons partager vos informations dans les situations
                  suivantes :
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300">
                  <li>
                    <strong>Prestataires de Services :</strong> Nous pouvons
                    partager vos informations avec des prestataires de services
                    tiers qui effectuent des services en notre nom
                  </li>
                  <li>
                    <strong>Transferts d'Entreprise :</strong> Nous pouvons
                    partager ou transférer vos informations dans le cadre d'une
                    fusion, vente ou acquisition
                  </li>
                  <li>
                    <strong>Exigences Légales :</strong> Nous pouvons divulguer
                    vos informations si la loi l'exige ou en réponse à des
                    demandes valides des autorités publiques
                  </li>
                  <li>
                    <strong>Avec Votre Consentement :</strong> Nous pouvons
                    divulguer vos informations à toute autre fin avec votre
                    consentement
                  </li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 dark:text-white">
                  5. Conservation des Données
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Nous ne conserverons vos informations personnelles que pendant
                  la durée nécessaire aux fins énoncées dans cette Politique de
                  Confidentialité, sauf si une période de conservation plus
                  longue est requise ou autorisée par la loi. Lorsque nous
                  n'avons plus besoin de vos informations personnelles, nous les
                  supprimerons ou les anonymiserons de manière sécurisée.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 dark:text-white">
                  6. Sécurité des Données
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Nous mettons en œuvre des mesures de sécurité techniques et
                  organisationnelles appropriées pour protéger vos informations
                  personnelles. Cependant, aucune méthode de transmission sur
                  Internet ou de stockage électronique n'est sûre à 100%. Bien
                  que nous nous efforcions d'utiliser des moyens commercialement
                  acceptables pour protéger vos informations personnelles, nous
                  ne pouvons garantir leur sécurité absolue.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 dark:text-white">
                  7. Vos Droits en Matière de Confidentialité
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Selon votre localisation, vous pouvez avoir les droits
                  suivants concernant vos informations personnelles :
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300">
                  <li>
                    <strong>Accès :</strong> Demander l'accès à vos informations
                    personnelles
                  </li>
                  <li>
                    <strong>Rectification :</strong> Demander la correction de
                    données inexactes ou incomplètes
                  </li>
                  <li>
                    <strong>Suppression :</strong> Demander la suppression de vos
                    informations personnelles
                  </li>
                  <li>
                    <strong>Portabilité :</strong> Demander le transfert de vos
                    données vers un autre service
                  </li>
                  <li>
                    <strong>Opposition :</strong> S'opposer au traitement de vos
                    informations personnelles
                  </li>
                  <li>
                    <strong>Limitation :</strong> Demander la limitation du
                    traitement de vos informations personnelles
                  </li>
                  <li>
                    <strong>Retrait du Consentement :</strong> Retirer votre
                    consentement à tout moment
                  </li>
                </ul>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Pour exercer ces droits, veuillez nous contacter à
                  contact@bestard.fr
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 dark:text-white">
                  8. Confidentialité des Enfants
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Notre application n'est pas destinée aux enfants de moins de
                  13 ans. Nous ne collectons pas sciemment d'informations
                  personnelles auprès d'enfants de moins de 13 ans. Si vous êtes
                  un parent ou un tuteur et que vous pensez que votre enfant
                  nous a fourni des informations personnelles, veuillez nous
                  contacter et nous supprimerons ces informations de nos
                  systèmes.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 dark:text-white">
                  9. Services Tiers
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Notre application peut contenir des liens vers des sites Web
                  ou services tiers. Nous ne sommes pas responsables des
                  pratiques de confidentialité de ces tiers. Nous vous
                  encourageons à lire leurs politiques de confidentialité.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 dark:text-white">
                  10. Transferts Internationaux de Données
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Vos informations peuvent être transférées et conservées sur
                  des ordinateurs situés en dehors de votre état, province, pays
                  ou autre juridiction gouvernementale où les lois sur la
                  protection des données peuvent différer. En utilisant notre
                  application, vous consentez à ces transferts.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 dark:text-white">
                  11. Cookies et Technologies de Suivi
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Nous pouvons utiliser des cookies et des technologies de suivi
                  similaires pour suivre l'activité sur notre application et
                  stocker certaines informations. Vous pouvez configurer votre
                  appareil pour refuser tous les cookies ou indiquer quand un
                  cookie est envoyé.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 dark:text-white">
                  12. Droits de Confidentialité en Californie
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Si vous êtes résident de Californie, vous disposez de droits
                  spécifiques concernant l'accès à vos informations personnelles
                  en vertu du California Consumer Privacy Act (CCPA). Cela
                  inclut le droit de savoir quelles informations personnelles
                  nous collectons, utilisons, divulguons et vendons.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 dark:text-white">
                  13. Conformité au RGPD
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Si vous vous trouvez dans l'Espace économique européen (EEE),
                  nous traitons vos informations personnelles sur la base de :
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300">
                  <li>Votre consentement</li>
                  <li>L'exécution d'un contrat avec vous</li>
                  <li>Le respect d'obligations légales</li>
                  <li>La protection de vos intérêts vitaux</li>
                  <li>Nos intérêts légitimes</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 dark:text-white">
                  14. Modifications de Cette Politique de Confidentialité
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Nous pouvons mettre à jour notre Politique de Confidentialité
                  de temps à autre. Nous vous informerons de tout changement en
                  publiant la nouvelle Politique de Confidentialité sur cette
                  page et en mettant à jour la date de "Dernière mise à jour".
                  Il vous est conseillé de consulter périodiquement cette
                  Politique de Confidentialité pour tout changement.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 dark:text-white">
                  15. Nous Contacter
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Si vous avez des questions concernant cette Politique de
                  Confidentialité, veuillez nous contacter :
                </p>
                <ul className="list-none pl-0 text-gray-700 dark:text-gray-300">
                  <li className="mb-2">
                    <strong>Email :</strong> contact@bestard.fr
                  </li>
                  <li className="mb-2">
                    <strong>Site Web :</strong> bestard.fr
                  </li>
                </ul>
              </section>
            </div>
          </ContentWrapper>
        </motion.div>
      </div>
    </>
  );
}

