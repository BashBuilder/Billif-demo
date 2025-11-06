import { Card, CardContent } from "@/components/ui/card";
import CalendlyWidget from "@/components/Widget/calendly";
import { Phone, Mail, MapPin, Calendar } from "lucide-react";

const ContactInfo = () => {
  return (
    <div>
      {/* <h2 className="mb-6 text-3xl font-bold text-primary">Get in Touch</h2>
      <p className="mb-8 text-lg text-muted-foreground">
        Multiple ways to connect with our team of financial automation experts.
      </p> */}

      <div className="space-y-6">
        <Card>
          <CardContent className="p-6">
            <div className="mb-4 flex items-center">
              <Phone className="mr-3 h-6 w-6 text-secondary" />
              <div>
                <h3 className="font-semibold">Phone Support</h3>
                <p className="text-sm text-muted-foreground">
                  Speak directly with our experts
                </p>
              </div>
            </div>
            <p className="text-lg font-semibold">0201 3306 099</p>
            <p className="text-sm text-muted-foreground">
              Monday - Friday, 8 AM - 6 PM WAT
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="mb-4 flex items-center">
              <Mail className="mr-3 h-6 w-6 text-secondary" />
              <div>
                <h3 className="font-semibold">Email Support</h3>
                <p className="text-sm text-muted-foreground">
                  Get detailed responses to your questions
                </p>
              </div>
            </div>
            <p className="text-lg font-semibold">support@billif.com</p>
            <p className="text-sm text-muted-foreground">
              Response within 24 hours
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="mb-4 flex items-center">
              <MapPin className="mr-3 h-6 w-6 text-secondary" />
              <div>
                <h3 className="font-semibold">Headquarters</h3>
                <p className="text-sm text-muted-foreground">
                  Visit our main office
                </p>
              </div>
            </div>
            <p className="text-lg font-semibold">
              Plot 5 Chief Yesufu Abiodun Oniru Road.
            </p>
            <p className="text-sm text-muted-foreground">
              Victoria Island, Lagos
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="mb-4 flex items-center">
              <Calendar className="mr-3 h-6 w-6 text-secondary" />
              <div>
                <h3 className="font-semibold">Schedule a Demo</h3>
                <p className="text-sm text-muted-foreground">
                  See our platform in action
                </p>
              </div>
            </div>
            <CalendlyWidget />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ContactInfo;
