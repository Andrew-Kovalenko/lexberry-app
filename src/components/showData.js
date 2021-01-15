export function showData(client, declarants, newDeclarants) {
  const clientId = client ? client.id : 'No Selected'
  const applicantsIds = declarants.length ? declarants.map(declarant => declarant.id) : 'No Client Selected Yet'
  const newApplicants = (newDeclarants.length > 0) ? newDeclarants : 'No One Added Yet'

  console.log('\nclientId: ', clientId, '\napplicantsIds: ', applicantsIds, '\nnewApplicants: ', newApplicants)
}