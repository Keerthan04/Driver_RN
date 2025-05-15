export type Delivery = {
  id: string;
  address: string;
  time: string;
  priority: "high" | "medium" | "low";
  status: DeliveryStatus;
  weight: number;
  size: "small" | "medium" | "large";
  deliveryType: "Standard" | "Express" | "Same-day";
  specialInstructions?: string;
};
export type DeliveryStatus = "pending" | "in-progress" | "completed" | "canceled";

export type Customer = {
    id: string;
    name: string;
    address: string;
    phoneNumber: string;
    email: string;
    deliveryInstructions?: string;
}
