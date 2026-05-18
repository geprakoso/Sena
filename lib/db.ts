import Database from 'better-sqlite3';
import path from 'path';

const DB_PATH = path.join(process.cwd(), 'data', 'case-studies.db');

let db: Database.Database | null = null;

export function getDb(): Database.Database {
  if (!db) {
    db = new Database(DB_PATH);
    db.pragma('journal_mode = WAL');
    db.pragma('foreign_keys = ON');
    initSchema(db);
  }
  return db;
}

function initSchema(database: Database.Database) {
  database.exec(`
    CREATE TABLE IF NOT EXISTS case_studies (
      id TEXT PRIMARY KEY,
      slug TEXT UNIQUE NOT NULL,
      title TEXT NOT NULL,
      tag TEXT NOT NULL,
      industry TEXT NOT NULL,
      timeline TEXT NOT NULL,
      team_size TEXT NOT NULL,
      year TEXT NOT NULL,
      outcome TEXT NOT NULL,
      description TEXT NOT NULL,
      hero_gradient TEXT NOT NULL,
      client_name TEXT NOT NULL,
      client_description TEXT NOT NULL,
      the_idea TEXT NOT NULL,
      the_challenge TEXT NOT NULL,
      the_result TEXT NOT NULL,
      business_challenge TEXT NOT NULL,
      architecture_intro TEXT NOT NULL,
      architecture_type TEXT NOT NULL,
      business_architecture_image TEXT,
      system_architecture_main_image TEXT,
      system_architecture_images TEXT,
      hero_image TEXT,
      product_image TEXT,
      product_features TEXT NOT NULL,
      dev_timeline TEXT NOT NULL,
      tech_stack TEXT NOT NULL,
      results TEXT NOT NULL,
      testimonial TEXT NOT NULL,
      created_at TEXT DEFAULT (datetime('now')),
      updated_at TEXT DEFAULT (datetime('now'))
    );
  `);
}

export type CaseStudyRow = {
  id: string;
  slug: string;
  title: string;
  tag: string;
  industry: string;
  timeline: string;
  team_size: string;
  year: string;
  outcome: string;
  description: string;
  hero_gradient: string;
  client_name: string;
  client_description: string;
  the_idea: string;
  the_challenge: string;
  the_result: string;
  business_challenge: string;
  architecture_intro: string;
  architecture_type: string;
  business_architecture_image: string | null;
  system_architecture_main_image: string | null;
  system_architecture_images: string | null;
  hero_image: string | null;
  product_image: string | null;
  product_features: string;
  dev_timeline: string;
  tech_stack: string;
  results: string;
  testimonial: string;
  created_at: string;
  updated_at: string;
};

export function getAllCaseStudies(): CaseStudyRow[] {
  const database = getDb();
  const stmt = database.prepare('SELECT id, slug, title, tag, industry, year, created_at FROM case_studies ORDER BY created_at DESC');
  return stmt.all() as CaseStudyRow[];
}

export function getCaseStudyById(id: string): CaseStudyRow | null {
  const database = getDb();
  const stmt = database.prepare('SELECT * FROM case_studies WHERE id = ?');
  return (stmt.get(id) as CaseStudyRow) || null;
}

export function getCaseStudyBySlug(slug: string): CaseStudyRow | null {
  const database = getDb();
  const stmt = database.prepare('SELECT * FROM case_studies WHERE slug = ?');
  return (stmt.get(slug) as CaseStudyRow) || null;
}

export function insertCaseStudy(data: Record<string, any>): CaseStudyRow {
  const database = getDb();
  const stmt = database.prepare(`
    INSERT INTO case_studies (
      id, slug, title, tag, industry, timeline, team_size, year, outcome,
      description, hero_gradient, client_name, client_description,
      the_idea, the_challenge, the_result, business_challenge,
      architecture_intro, architecture_type,
      business_architecture_image, system_architecture_main_image,
      system_architecture_images, hero_image, product_image,
      product_features, dev_timeline, tech_stack, results, testimonial
    ) VALUES (
      @id, @slug, @title, @tag, @industry, @timeline, @team_size, @year, @outcome,
      @description, @hero_gradient, @client_name, @client_description,
      @the_idea, @the_challenge, @the_result, @business_challenge,
      @architecture_intro, @architecture_type,
      @business_architecture_image, @system_architecture_main_image,
      @system_architecture_images, @hero_image, @product_image,
      @product_features, @dev_timeline, @tech_stack, @results, @testimonial
    )
  `);

  stmt.run({
    id: data.id,
    slug: data.slug,
    title: data.title,
    tag: data.tag,
    industry: data.industry,
    timeline: data.timeline,
    team_size: data.teamSize,
    year: data.year,
    outcome: data.outcome,
    description: data.description,
    hero_gradient: data.heroGradient,
    client_name: data.clientName,
    client_description: data.clientDescription,
    the_idea: data.theIdea,
    the_challenge: data.theChallenge,
    the_result: data.theResult,
    business_challenge: JSON.stringify(data.businessChallenge),
    architecture_intro: data.architectureIntro,
    architecture_type: data.architectureType,
    business_architecture_image: data.businessArchitectureImage || null,
    system_architecture_main_image: data.systemArchitectureMainImage || null,
    system_architecture_images: JSON.stringify(data.systemArchitectureImages || []),
    hero_image: data.heroImage || null,
    product_image: data.productImage || null,
    product_features: JSON.stringify(data.productFeatures),
    dev_timeline: JSON.stringify(data.devTimeline),
    tech_stack: JSON.stringify(data.techStack),
    results: JSON.stringify(data.results),
    testimonial: JSON.stringify(data.testimonial),
  });

  return getCaseStudyById(data.id)!;
}

export function updateCaseStudy(id: string, data: Record<string, any>): CaseStudyRow | null {
  const database = getDb();
  const stmt = database.prepare(`
    UPDATE case_studies SET
      slug = @slug, title = @title, tag = @tag, industry = @industry,
      timeline = @timeline, team_size = @team_size, year = @year, outcome = @outcome,
      description = @description, hero_gradient = @hero_gradient,
      client_name = @client_name, client_description = @client_description,
      the_idea = @the_idea, the_challenge = @the_challenge, the_result = @the_result,
      business_challenge = @business_challenge,
      architecture_intro = @architecture_intro, architecture_type = @architecture_type,
      business_architecture_image = @business_architecture_image,
      system_architecture_main_image = @system_architecture_main_image,
      system_architecture_images = @system_architecture_images,
      hero_image = @hero_image, product_image = @product_image,
      product_features = @product_features, dev_timeline = @dev_timeline,
      tech_stack = @tech_stack, results = @results, testimonial = @testimonial,
      updated_at = datetime('now')
    WHERE id = @id
  `);

  const result = stmt.run({
    id,
    slug: data.slug,
    title: data.title,
    tag: data.tag,
    industry: data.industry,
    timeline: data.timeline,
    team_size: data.teamSize,
    year: data.year,
    outcome: data.outcome,
    description: data.description,
    hero_gradient: data.heroGradient,
    client_name: data.clientName,
    client_description: data.clientDescription,
    the_idea: data.theIdea,
    the_challenge: data.theChallenge,
    the_result: data.theResult,
    business_challenge: JSON.stringify(data.businessChallenge),
    architecture_intro: data.architectureIntro,
    architecture_type: data.architectureType,
    business_architecture_image: data.businessArchitectureImage || null,
    system_architecture_main_image: data.systemArchitectureMainImage || null,
    system_architecture_images: JSON.stringify(data.systemArchitectureImages || []),
    hero_image: data.heroImage || null,
    product_image: data.productImage || null,
    product_features: JSON.stringify(data.productFeatures),
    dev_timeline: JSON.stringify(data.devTimeline),
    tech_stack: JSON.stringify(data.techStack),
    results: JSON.stringify(data.results),
    testimonial: JSON.stringify(data.testimonial),
  });

  if (result.changes === 0) return null;
  return getCaseStudyById(id);
}

export function deleteCaseStudy(id: string): boolean {
  const database = getDb();
  const stmt = database.prepare('DELETE FROM case_studies WHERE id = ?');
  const result = stmt.run(id);
  return result.changes > 0;
}
