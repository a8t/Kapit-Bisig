import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import OrganizationCard from "../components/OrganizationCard"
import {
  PageContainer,
  Title,
  Subtitle,
  Paragraph,
  Card,
} from "../components/ds"
import Link from "../components/Link"
import { toKebabCase } from "../utils/toKebabCase"
import { RequestAid, Volunteer } from "../components/callToAction"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const CityPage = ({ pageContext }) => {
  const {
    name,
    cities,
    province: { name: provinceName },
    requestForm,
    volunteerForm,
    organizations,
  } = pageContext

  const requestFormWithDefault = requestForm ?? "mailto:request@kapitbisig.ca"
  const volunteerFormWithDefault =
    volunteerForm ?? "mailto:volunteer@kapitbisig.ca"

  return (
    <Layout>
      <SEO title={`${name} | Kapit-Bisig Canada`} />
      <PageContainer>
        <Title>
          {/* <span className="text-gray-700 text-sm uppercase">Kapit-Bisig •</span>{" "} */}
          {name}, {provinceName}
        </Title>
        {/* {_rawContent.map(({ heading, text }) => (
									<>
										<Title isSpaced>{heading}</Title>
										<PortableText blocks={text} />
									</>
								))} */}
        <section className="max-w-lg">
          {name == "Toronto" ? (
            <Card title="Get Involved">
              <Paragraph>
                At this current moment, we are unable to accept new member
                requests. Please come back at a later date. We are doing our
                best to meet everyone's needs and will be accepting member
                registration again soon.
              </Paragraph>
              <div className="grid gap-8 sm:grid-cols-1">
                <div>
                  <p className="mb-2">
                    <a
                      href="https://actionnetwork.org/groups/kapit-bisig-canada"
                      target="_new"
                    >
                      Donate
                    </a>
                  </p>
                </div>
              </div>
            </Card>
          ) : (
            <Card title="Get Involved">
              <div className="grid gap-8 sm:grid-cols-2">
                <div>
                  <p className="mb-2">To request help:</p>
                  <RequestAid
                    isColor="primary"
                    link={
                      requestFormWithDefault.includes("mailto")
                        ? `${requestFormWithDefault}?subject=Kapit-Bisig Help Requested - ${name}`
                        : requestFormWithDefault
                    }
                  />
                </div>
                <div>
                  <p className="mb-2">To volunteer:</p>
                  <Volunteer
                    isColor="outline"
                    link={
                      volunteerFormWithDefault.includes("mailto")
                        ? `${volunteerFormWithDefault}?subject=Kapit-Bisig Volunteer Signup - ${name}`
                        : volunteerFormWithDefault
                    }
                  />
                </div>
              </div>
            </Card>
          )}
        </section>

        <section id="organizations" className="max-w-lg mt-8">
          <Card title="Organizations">
            <Paragraph>
              The following organizations are participating in the Kapit-Bisig
              Laban COVID project in {name}. For more information, please visit
              the individual organization listing.
            </Paragraph>

            <ul className="flex flex-col space-y-2">
              {organizations.map(organization => (
                <Link
                  to={`/organizations/${toKebabCase(organization.name)}`}
                  as="li"
                  className="group self-start"
                >
                  <FontAwesomeIcon
                    icon="arrow-right"
                    className="mr-2 text-blue-400"
                  />
                  {organization.name}
                </Link>
              ))}
            </ul>
            {/* <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 flex-wrap">
						{organizations.map(organization => (
							<OrganizationCard
								name={organization.name}
								cityNames={organization.cities.map(({ name }) => name)}
								provinceName={organization.province.name}
								email={organization.email}
								twitter={organization.twitter}
								facebook={organization.facebook}
								phone={organization.phone}
								website={organization.website}
								instagram={organization.instagram}
							/>
						))}
					</div> */}
          </Card>
        </section>
      </PageContainer>
    </Layout>
  )
}

export default CityPage
