interface FactData {
    fact_subject: String,
    fact_line: String,
    fact_description: String,
    video_ref: String,
    learn_ref: String
}

interface FactProps {
    factData: FactData |  undefined
}

interface FactListProps {
    facts: Array<FactData> | undefined
  }