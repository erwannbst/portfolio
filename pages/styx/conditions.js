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

export default function StyxConditions() {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="googlebot" content="noindex, nofollow" />
      </Head>
      <NextSeo
        title="Styx - Conditions Générales d'Utilisation"
        description="Conditions Générales d'Utilisation de l'application Styx"
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
              Styx - Conditions Générales d'Utilisation
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
                  1. Acceptation des Conditions
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  En accédant et en utilisant Styx ("l'Application"), vous
                  acceptez et vous engagez à respecter les termes et conditions
                  du présent accord. Si vous n'acceptez pas ces conditions,
                  veuillez ne pas utiliser l'Application.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 dark:text-white">
                  2. Licence d'Utilisation
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  L'autorisation est accordée de télécharger temporairement une
                  copie de Styx pour un usage personnel et non commercial
                  uniquement. Il s'agit de l'octroi d'une licence et non d'un
                  transfert de propriété. Dans le cadre de cette licence, vous
                  ne pouvez pas :
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300">
                  <li>Modifier ou copier les contenus de l'Application</li>
                  <li>
                    Utiliser les contenus à des fins commerciales ou pour toute
                    présentation publique
                  </li>
                  <li>
                    Tenter de décompiler ou de désassembler tout logiciel
                    contenu dans l'Application
                  </li>
                  <li>
                    Supprimer toute mention de droit d'auteur ou autres
                    mentions de propriété des contenus
                  </li>
                  <li>
                    Transférer les contenus à une autre personne ou "reproduire"
                    les contenus sur tout autre serveur
                  </li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 dark:text-white">
                  3. Comptes Utilisateurs
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Lorsque vous créez un compte chez nous, vous devez fournir
                  des informations exactes, complètes et à jour en permanence.
                  Le non-respect de cette obligation constitue une violation des
                  Conditions, pouvant entraîner la résiliation immédiate de
                  votre compte.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Vous êtes responsable de la protection du mot de passe que
                  vous utilisez pour accéder à l'Application et de toutes les
                  activités ou actions effectuées avec votre mot de passe.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 dark:text-white">
                  4. Politique de Confidentialité
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Votre utilisation de l'Application est également régie par
                  notre Politique de Confidentialité. Nous nous engageons à
                  protéger vos informations personnelles et votre droit à la vie
                  privée. Veuillez consulter notre Politique de Confidentialité
                  pour comprendre nos pratiques.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 dark:text-white">
                  5. Contenu Utilisateur
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Les utilisateurs peuvent publier, télécharger ou soumettre du
                  contenu via l'Application. Vous conservez tous les droits sur
                  tout contenu que vous soumettez, publiez ou affichez sur ou
                  via l'Application. En publiant du contenu, vous nous accordez
                  une licence mondiale, non exclusive et libre de redevances
                  pour utiliser, reproduire, modifier et afficher ce contenu
                  uniquement dans le but d'exploiter et de fournir
                  l'Application.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 dark:text-white">
                  6. Utilisations Interdites
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Vous ne pouvez pas utiliser l'Application :
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300">
                  <li>
                    D'une manière qui viole toute loi ou réglementation
                    nationale ou internationale applicable
                  </li>
                  <li>
                    Pour transmettre ou procurer l'envoi de tout matériel
                    publicitaire ou promotionnel
                  </li>
                  <li>
                    Pour usurper l'identité ou tenter d'usurper l'identité de
                    l'entreprise, d'un autre utilisateur ou de toute autre
                    personne ou entité
                  </li>
                  <li>
                    D'une manière qui porte atteinte aux droits d'autrui
                  </li>
                  <li>
                    Pour adopter tout autre comportement qui restreint ou
                    empêche l'utilisation ou la jouissance de l'Application par
                    quiconque
                  </li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 dark:text-white">
                  7. Clause de Non-Responsabilité
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Les contenus de l'Application sont fournis "en l'état". Nous
                  ne donnons aucune garantie, expresse ou implicite, et déclinons
                  et annulons par la présente toutes les autres garanties, y
                  compris, sans limitation, les garanties ou conditions
                  implicites de qualité marchande, d'adéquation à un usage
                  particulier ou de non-violation de la propriété intellectuelle
                  ou autre violation de droits.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 dark:text-white">
                  8. Limitations de Responsabilité
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  En aucun cas, Styx ou ses fournisseurs ne seront tenus
                  responsables de tous dommages (y compris, sans limitation, les
                  dommages pour perte de données ou de profit, ou dus à une
                  interruption d'activité) découlant de l'utilisation ou de
                  l'impossibilité d'utiliser l'Application, même si nous ou
                  notre représentant autorisé avons été informés oralement ou
                  par écrit de la possibilité de tels dommages.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 dark:text-white">
                  9. Résiliation
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Nous pouvons résilier ou suspendre votre compte et interdire
                  l'accès à l'Application immédiatement, sans préavis ni
                  responsabilité, à notre seule discrétion, pour quelque raison
                  que ce soit et sans limitation, y compris en cas de violation
                  des Conditions.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 dark:text-white">
                  10. Modifications des Conditions
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Nous nous réservons le droit de modifier ou de remplacer ces
                  Conditions à tout moment à notre seule discrétion. Si une
                  révision est importante, nous fournirons un préavis d'au moins
                  30 jours avant l'entrée en vigueur de nouvelles conditions. Ce
                  qui constitue un changement important sera déterminé à notre
                  seule discrétion.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 dark:text-white">
                  11. Loi Applicable
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Ces Conditions seront régies et interprétées conformément aux
                  lois de France, sans égard à ses dispositions en matière de
                  conflit de lois.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 dark:text-white">
                  12. Informations de Contact
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Si vous avez des questions concernant ces Conditions, veuillez
                  nous contacter à :
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  Email : contact@bestard.fr
                </p>
              </section>
            </div>
          </ContentWrapper>
        </motion.div>
      </div>
    </>
  );
}

