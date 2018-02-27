export class Task {
  $key: string;
  user_id: string;
  task_name: string;
  task_description: string;
  start_date: string;
  end_date: string;

  task_level: string;
  tags: string[];
  is_complete: boolean;

  repeat: boolean;
  every: number;
  every_timeFrame: string;
  every_week_days: string[];
  every_month: string;

  ends: boolean;
  end_condition: string;
  end_condition_on: string;
  end_condition_after: number;

  is_delete: boolean;


}
