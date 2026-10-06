import { useState, useEffect } from 'react'
import { Container, Row, Col, Spinner } from 'react-bootstrap'
import './GithubSection.css'

const GITHUB_USERNAME = 'ravirajthakare'

function GithubSection() {
  const [profile, setProfile] = useState(null)
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchGithubData() {
      try {
        setLoading(true)
        setError(null)

        const profileRes = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`)
        if (!profileRes.ok) throw new Error('Could not load GitHub profile.')
        const profileData = await profileRes.json()

        const reposRes = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`)
        if (!reposRes.ok) throw new Error('Could not load repositories.')
        const reposData = await reposRes.json()

        setProfile(profileData)
        setRepos(reposData)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchGithubData()
  }, [])

  return (
    <section id="github" className="github-section" data-aos="fade-up">
      <Container>
        <h2 className="section-heading">GitHub Activity</h2>

        {loading && (
          <div className="github-status">
            <Spinner animation="border" size="sm" className="me-2" />
            Loading GitHub data...
          </div>
        )}

        {error && (
          <div className="github-status github-error">
            {error} You can still visit my{' '}
            <a href={`https://github.com/${GITHUB_USERNAME}`} target="_blank" rel="noopener noreferrer">GitHub profile</a>{' '}
            directly.
          </div>
        )}

        {!loading && !error && profile && (
          <>
            <div className="github-profile">
              <img src={profile.avatar_url} alt={`${profile.login} avatar`} className="github-avatar" />
              <div>
                <h3>{profile.name || profile.login}</h3>
                <p className="github-bio">{profile.bio || 'No bio set on GitHub yet.'}</p>
                <a href={profile.html_url} target="_blank" rel="noopener noreferrer" className="github-profile-link">View Full Profile on GitHub</a>
              </div>
            </div>

            <Row className="g-4 mt-2">
              {repos.map((repo) => (
                <Col key={repo.id} md={6} lg={4}>
                  <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="repo-card">
                    <h4 className="repo-name">{repo.name}</h4>
                    <p className="repo-description">{repo.description || 'No description provided.'}</p>
                    <div className="repo-meta">
                      {repo.language && <span>{repo.language}</span>}
                      <span>⭐ {repo.stargazers_count}</span>
                    </div>
                  </a>
                </Col>
              ))}
            </Row>
          </>
        )}
      </Container>
    </section>
  )
}

export default GithubSection