export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      jobs: {
        Row: {
          id: string;
          title: string;
          slug: string;
          department: string;
          location: string;
          employment_type: string;
          experience: string;
          salary: string | null;
          short_description: string;
          description: string;
          responsibilities: string[];
          requirements: string[];
          benefits: string[];
          tech_stack: string[];
          published: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          title: string;
          slug: string;
          department: string;
          location: string;
          employment_type: string;
          experience: string;
          salary?: string | null;
          short_description: string;
          description: string;
          responsibilities?: string[];
          requirements?: string[];
          benefits?: string[];
          tech_stack?: string[];
          published?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          title?: string;
          slug?: string;
          department?: string;
          location?: string;
          employment_type?: string;
          experience?: string;
          salary?: string | null;
          short_description?: string;
          description?: string;
          responsibilities?: string[];
          requirements?: string[];
          benefits?: string[];
          tech_stack?: string[];
          published?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Relationships: [];
      };
      applications: {
        Row: {
          id: string;
          job_id: string;
          full_name: string;
          email: string;
          phone: string | null;
          current_location: string | null;
          years_of_experience: number | null;
          linkedin: string | null;
          portfolio: string | null;
          resume_url: string | null;
          cover_letter: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          job_id: string;
          full_name: string;
          email: string;
          phone?: string | null;
          current_location?: string | null;
          years_of_experience?: number | null;
          linkedin?: string | null;
          portfolio?: string | null;
          resume_url?: string | null;
          cover_letter?: string | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          job_id?: string;
          full_name?: string;
          email?: string;
          phone?: string | null;
          current_location?: string | null;
          years_of_experience?: number | null;
          linkedin?: string | null;
          portfolio?: string | null;
          resume_url?: string | null;
          cover_letter?: string | null;
          created_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "applications_job_id_fkey";
            columns: ["job_id"];
            isOneToOne: false;
            referencedRelation: "jobs";
            referencedColumns: ["id"];
          },
        ];
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
}
